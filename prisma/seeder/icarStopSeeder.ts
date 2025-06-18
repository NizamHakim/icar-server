import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const icarStopSeeder = async () => {
	await prisma.icarStop.createMany({
		data: [
			{
				name: "Gerbang ITS",
				coordinate: {
					latitude: -7.280328,
					longitude: 112.79137,
				},
			},
			{
				name: "Teknik Lingkungan ITS",
				coordinate: {
					latitude: -7.280241,
					longitude: 112.792118,
				},
			},
			{
				name: "Rektorat ITS",
				coordinate: {
					latitude: -7.282039,
					longitude: 112.793872,
				},
			},
			{
				name: "Kantin Pusat ITS",
				coordinate: {
					latitude: -7.284528,
					longitude: 112.793384,
				},
			},
			{
				name: "Asrama ITS",
				coordinate: {
					latitude: -7.288667,
					longitude: 112.792659,
				},
			},
			{
				name: "Masjid Manarul Ilmi",
				coordinate: {
					latitude: -7.283841,
					longitude: 112.793146,
				},
			},
			{
				name: "Tower 2",
				coordinate: {
					latitude: -7.286007,
					longitude: 112.795212,
				},
			},
			{
				name: "Perumdos Blok U Barat",
				coordinate: {
					latitude: -7.283532,
					longitude: 112.799285,
				},
			},
			{
				name: "Gedung Riset",
				coordinate: {
					latitude: -7.280722,
					longitude: 112.797747,
				},
			},
			{
				name: "Gedung Pusat Robotika ITS",
				coordinate: {
					latitude: -7.278068,
					longitude: 112.797312,
				},
			},
			{
				name: "Perumdos Blok U Timur",
				coordinate: {
					latitude: -7.283802,
					longitude: 112.799395,
				},
			},
			{
				name: "Danau 8",
				coordinate: {
					latitude: -7.286039,
					longitude: 112.796072,
				},
			},
		],
	});
};
