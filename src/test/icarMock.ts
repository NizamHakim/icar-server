import { prisma } from "../utils/prisma";
import { WebSocket } from "ws";

const WS_DEV_URL = "ws://localhost:5000";
const WS_PROD_URL = "wss://icar-server-production.up.railway.app";

async function main() {
  const icars = await prisma.icar.findMany({
    include: {
      icarRoute: {
        include: {
          routeStopWaypoints: {
            include: {
              icarStop: true,
            },
          },
        },
      },
    },
  });

  icars.forEach((icar) => {
    const ws = new WebSocket(WS_DEV_URL, {
      headers: {
        "x-icar-id": icar.id.toString(),
        "x-client-type": "icar",
      },
    });
    ws.on("open", () => {
      periodicallySendLocation(ws, icar);
    });
  });
}

function periodicallySendLocation(ws: WebSocket, icar: IcarType) {
  let index = 0;

  const waypoints = icar!.icarRoute.routeStopWaypoints;
  const totalWaypoints = waypoints.length;

  const intervalId = setInterval(() => {
    if (ws.readyState !== WebSocket.OPEN) {
      clearInterval(intervalId);
      return;
    }

    if (index >= totalWaypoints) {
      index = 0;
    }

    const currentWaypoint = waypoints[index];
    const currentStop = currentWaypoint.icarStop;
    const currentStopCoordinate = currentStop.coordinate as Coordinate;

    const message = {
      icarId: icar!.id,
      position: {
        latitude: currentStopCoordinate.latitude,
        longitude: currentStopCoordinate.longitude,
        heading: 0,
      },
    };

    ws.send(JSON.stringify(message));
    console.log(`Icar ${icar!.id} at stop ${currentStop.name}`);

    index++;
  }, 5000);
}

function randomHeadingValue() {
  return Math.random() * 360;
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

type IcarType = Awaited<
  ReturnType<
    typeof prisma.icar.findFirst<{
      include: {
        icarRoute: {
          include: {
            routeStopWaypoints: {
              include: {
                icarStop: true;
              };
            };
          };
        };
      };
    }>
  >
>;
