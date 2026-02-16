import { IncomingMessage } from "http";
import WebSocket, { WebSocketServer } from "ws";
import { icarService } from "./services/icarService";
import { ticketService } from "./services/ticketService";
import { jwtUtils } from "./utils/jwtUtils";
import { parseCoordinate } from "./utils/parseCoordinate";

export const setupSocketIO = (httpServer: any) => {
  const wss = new WebSocketServer({ server: httpServer });
  const ICARS: Map<WebSocket, number> = new Map();
  const USERS: Map<WebSocket, number> = new Map();

  wss.on("connection", async (ws: WebSocket, req: IncomingMessage) => {
    console.log(req.headers);
    const clientType = req.headers["x-client-type"];

    if (clientType === "icar") {
      const isConnected = await handleIcarConnect(ws, req);
      if (!isConnected) return;

      const icarId = parseInt(req.headers["x-icar-id"] as string);
      ICARS.set(ws, icarId);
      console.log("ICAR connected");
      handleIcarMessage(ws);
    } else if (clientType === "user") {
      try {
        const userToken = req.headers["x-auth-token"] as string;
        const decodedToken = jwtUtils.verifyToken(userToken);
        USERS.set(ws, decodedToken.userId);
        console.log(`User connected ${decodedToken}`);
      } catch (e) {
        return;
      }
    } else {
      ws.close();
      return;
    }

    ws.on("close", async () => {
      if (clientType === "icar") {
        await handleIcarDisconnect(ws);
        ICARS.delete(ws);
        console.log("ICAR disconnected");
      }
    });
  });

  async function handleIcarConnect(
    ws: WebSocket,
    req: IncomingMessage,
  ): Promise<boolean> {
    try {
      const icarId = parseInt(req.headers["x-icar-id"] as string);
      if (isNaN(icarId)) {
        throw new Error();
      }
      await icarService.connectIcar(icarId);
      return true;
    } catch (error) {
      console.error(error);
      ws.close();
      return false;
    }
  }

  function handleIcarMessage(ws: WebSocket) {
    ws.on("message", (message: string) => {
      const data = JSON.parse(message);
      console.log("Received message from ICAR:", data);

      const icarId = parseInt(data.icarId);
      const icarPosition = parseCoordinate(data.position);

      USERS.forEach(async (userId, userWs) => {
        if (userWs.readyState === WebSocket.OPEN) {
          const ticketsProximity = await ticketService.getTicketsDistance(
            userId,
            icarId,
            icarPosition,
          );
          const userMessage: WebSocketMessage = {
            type: "position",
            ticketsProximity: ticketsProximity,
            icarPosition: {
              id: icarId,
              position: icarPosition,
            },
          };
          userWs.send(JSON.stringify(userMessage), { binary: false });
        }
      });
      ws.send(message, { binary: false });
    });
  }

  async function handleIcarDisconnect(ws: WebSocket) {
    const icarId = ICARS.get(ws);
    if (!icarId) return;

    try {
      const icar = await icarService.getIcarById(icarId);
      USERS.forEach(async (userId, userWs) => {
        if (userWs.readyState === WebSocket.OPEN) {
          const canceledTickets = await ticketService.cancelTickets(
            icarId,
            userId,
          );
          const userMessage: WebSocketMessage = {
            type: "disconnect",
            icarPosition: {
              id: icar.id,
              name: icar.name,
            },
            canceledTickets: canceledTickets.count,
          };
          userWs.send(JSON.stringify(userMessage), { binary: false });
        }
      });
      await icarService.disconnectIcar(icarId);
    } catch (error) {
      console.error(error);
    }
  }
};
