import { IncomingMessage } from "http";
import WebSocket from "ws";
import { icarService } from "../services/icarService";

export const setupSocketIO = (httpServer: any) => {
	const wss = new WebSocket.Server({ server: httpServer });
	const ICARS: Map<WebSocket, number> = new Map();
	const USERS: WebSocket[] = [];

	wss.on("connection", async (ws: WebSocket, req: IncomingMessage) => {
		const clientType = req.headers["client-type"];

		if (clientType === "icar") {
			const isConnected = await handleIcarConnect(ws, req);
			if (!isConnected) return;

			console.log("ICAR connected");
			ICARS.set(ws, parseInt(req.headers["icar-id"] as string));
			handleIcarMessage(ws);
		} else if (clientType === "user") {
			USERS.push(ws);
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
		req: IncomingMessage
	): Promise<boolean> {
		try {
			await icarService.connectIcar(req.headers["icar-id"] as string);
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

			USERS.forEach((user) => {
				if (user.readyState === WebSocket.OPEN) {
					user.send(
						JSON.stringify({
							type: "position",
							icarId: parseInt(data.icarId),
							position: data.position,
						}),
						{ binary: false }
					);
				}
			});
			ws.send(message, { binary: false });
		});
	}

	async function handleIcarDisconnect(ws: WebSocket) {
		const icarId = ICARS.get(ws);
		if (!icarId) return;

		try {
			const icar = await icarService.disconnectIcar(icarId);
			USERS.forEach((user) => {
				if (user.readyState === WebSocket.OPEN) {
					user.send(JSON.stringify({ type: "disconnected", icar: icar }), {
						binary: false,
					});
				}
			});
		} catch (error) {
			console.error(error);
		}
	}
};
