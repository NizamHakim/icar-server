"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.icarStopSeeder = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const icarStopSeeder = () => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.icarStop.createMany({
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
});
exports.icarStopSeeder = icarStopSeeder;
