import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const routeStopWaypointSeeder = async () => {
	const gerbangITS = await prisma.icarStop.findUnique({
		where: { name: "Gerbang ITS" },
	});

	const teknikLingkungan = await prisma.icarStop.findUnique({
		where: { name: "Teknik Lingkungan ITS" },
	});

	const rektoratITS = await prisma.icarStop.findUnique({
		where: { name: "Rektorat ITS" },
	});

	const kantinPusat = await prisma.icarStop.findUnique({
		where: { name: "Kantin Pusat ITS" },
	});

	const asramaITS = await prisma.icarStop.findUnique({
		where: { name: "Asrama ITS" },
	});

	const masjidManarulIlmi = await prisma.icarStop.findUnique({
		where: { name: "Masjid Manarul Ilmi" },
	});

	const tower2 = await prisma.icarStop.findUnique({
		where: { name: "Tower 2" },
	});

	const perumdosBlokUBarat = await prisma.icarStop.findUnique({
		where: { name: "Perumdos Blok U Barat" },
	});

	const gedungRiset = await prisma.icarStop.findUnique({
		where: { name: "Gedung Riset" },
	});

	const gedungPusatRobotikaITS = await prisma.icarStop.findUnique({
		where: { name: "Gedung Pusat Robotika ITS" },
	});

	const perumdosBlokUTimur = await prisma.icarStop.findUnique({
		where: { name: "Perumdos Blok U Timur" },
	});

	const danau8 = await prisma.icarStop.findUnique({
		where: { name: "Danau 8" },
	});

	const bunderanAsrama = await prisma.icarRoute.findUnique({
		where: { name: "Bunderan ITS - Asrama ITS" },
	});

	await prisma.routeStopWaypoint.createMany({
		data: [
			{
				icarRouteId: bunderanAsrama!.id,
				icarStopId: gerbangITS!.id,
				order: 1,
			},
			{
				icarRouteId: bunderanAsrama!.id,
				icarStopId: teknikLingkungan!.id,
				order: 2,
			},
			{
				icarRouteId: bunderanAsrama!.id,
				icarStopId: rektoratITS!.id,
				order: 3,
			},
			{
				icarRouteId: bunderanAsrama!.id,
				icarStopId: kantinPusat!.id,
				order: 4,
			},
			{
				icarRouteId: bunderanAsrama!.id,
				icarStopId: asramaITS!.id,
				order: 5,
			},
			{
				icarRouteId: bunderanAsrama!.id,
				icarStopId: masjidManarulIlmi!.id,
				order: 6,
			},
		],
	});

	const kantinRobotika = await prisma.icarRoute.findUnique({
		where: { name: "Kantin ITS - Robotika" },
	});

	await prisma.routeStopWaypoint.createMany({
		data: [
			{
				icarRouteId: kantinRobotika!.id,
				icarStopId: kantinPusat!.id,
				order: 1,
			},
			{
				icarRouteId: kantinRobotika!.id,
				icarStopId: tower2!.id,
				order: 2,
			},
			{
				icarRouteId: kantinRobotika!.id,
				icarStopId: perumdosBlokUBarat!.id,
				order: 3,
			},
			{
				icarRouteId: kantinRobotika!.id,
				icarStopId: gedungRiset!.id,
				order: 4,
			},
			{
				icarRouteId: kantinRobotika!.id,
				icarStopId: gedungPusatRobotikaITS!.id,
				order: 5,
			},
			{
				icarRouteId: kantinRobotika!.id,
				icarStopId: perumdosBlokUTimur!.id,
				order: 6,
			},
			{
				icarRouteId: kantinRobotika!.id,
				icarStopId: danau8!.id,
				order: 7,
			},
			{
				icarRouteId: kantinRobotika!.id,
				icarStopId: masjidManarulIlmi!.id,
				order: 8,
			},
		],
	});
};
