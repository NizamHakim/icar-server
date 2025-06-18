import {
	PrismaClient,
	RouteStopWaypoint,
	ScheduleSession,
} from "@prisma/client";
import { DateTime } from "luxon";
import { BadGatewayError } from "../../src/errors/BadGatewayError";
import { Coordinate } from "../../src/types/coordinate";

const prisma = new PrismaClient();

export const scheduleSeeder = async () => {
	const startSession1 = DateTime.fromObject(
		{ hour: 9, minute: 0 },
		{ zone: "Asia/Jakarta" }
	);
	const endSession1 = DateTime.fromObject(
		{ hour: 11, minute: 0 },
		{ zone: "Asia/Jakarta" }
	);

	const startSession2 = DateTime.fromObject(
		{ hour: 14, minute: 0 },
		{ zone: "Asia/Jakarta" }
	);
	const endSession2 = DateTime.fromObject(
		{ hour: 16, minute: 0 },
		{ zone: "Asia/Jakarta" }
	);

	// icar 1 sesi 1
	const icar1 = await prisma.icar.findFirst({
		where: {
			name: "iCar 1",
		},
	});

	const routeStopWaypoint1 = await prisma.routeStopWaypoint.findMany({
		where: {
			icarRouteId: icar1!.icarRouteId,
		},
		include: {
			icarStop: true,
		},
		orderBy: {
			order: "asc",
		},
	});

	await generateSchedule(
		icar1!.id,
		routeStopWaypoint1,
		ScheduleSession.SESSION_1,
		startSession1,
		endSession1,
		routeStopWaypoint1.length
	);

	// sesi 2 icar 1
	await generateSchedule(
		icar1!.id,
		routeStopWaypoint1,
		ScheduleSession.SESSION_2,
		startSession2,
		endSession2,
		routeStopWaypoint1.length
	);

	// icar 2 sesi 1
	const icar2 = await prisma.icar.findFirst({
		where: {
			name: "iCar 2",
		},
	});

	const routeStopWaypoint2 = await prisma.routeStopWaypoint.findMany({
		where: {
			icarRouteId: icar2!.icarRouteId,
		},
		include: {
			icarStop: true,
		},
		orderBy: {
			order: "asc",
		},
	});

	await generateSchedule(
		icar2!.id,
		routeStopWaypoint2,
		ScheduleSession.SESSION_1,
		startSession1,
		endSession1,
		routeStopWaypoint2.length
	);

	await generateSchedule(
		icar2!.id,
		routeStopWaypoint2,
		ScheduleSession.SESSION_2,
		startSession2,
		endSession2,
		routeStopWaypoint2.length
	);
};

type RouteStopWaypointType = Awaited<
	ReturnType<
		typeof prisma.routeStopWaypoint.findFirst<{
			include: {
				icarStop: true;
			};
		}>
	>
>;

async function generateSchedule(
	icarId: number,
	routeStopWaypoint: RouteStopWaypointType[],
	session: ScheduleSession,
	start: DateTime,
	end: DateTime,
	mod: number
): Promise<void> {
	let idx = 0;
	let current = start;
	while (current < end) {
		await prisma.schedule.create({
			data: {
				icarId: icarId,
				icarStopId: routeStopWaypoint[idx % mod]!.icarStopId,
				arrivalTime: current.toJSDate(),
				session: session,
			},
		});

		const stopMinutes = 1;

		const response = await fetch(
			`${process.env.OSRM_URL}/${
				(routeStopWaypoint[idx % mod]!.icarStop.coordinate as Coordinate)
					.longitude
			},${
				(routeStopWaypoint[idx % mod]!.icarStop.coordinate as Coordinate)
					.latitude
			};${
				(routeStopWaypoint[(idx + 1) % mod]!.icarStop.coordinate as Coordinate)
					.longitude
			},${
				(routeStopWaypoint[(idx + 1) % mod]!.icarStop.coordinate as Coordinate)
					.latitude
			}?geometries=geojson`
		);

		if (!response.ok) {
			throw new BadGatewayError(
				`Error fetching data from OSRM: ${response.statusText}`
			);
		}

		const data = await response.json();

		current = current.plus({
			minutes: stopMinutes,
			seconds: Math.floor(data.routes[0].duration),
		});
		idx++;
	}
}
