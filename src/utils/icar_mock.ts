import { PrismaClient } from "@prisma/client";
import { WebSocket } from "ws";

const prisma = new PrismaClient();

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
		const ws = new WebSocket("ws://localhost:5000", {
			headers: {
				"icar-id": icar.id.toString(),
				"client-type": "icar",
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

		const message = {
			icarId: icar!.id,
			position: currentStop.coordinate,
		};

		ws.send(JSON.stringify(message));
		console.log(`Icar ${icar!.id} at stop ${currentStop.name}`);

		index++;
	}, 5000);
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
