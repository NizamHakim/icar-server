import { errorMessages } from "../errors/core/errorMessages";
import { NotFoundError } from "../errors/NotFoundError";
import { icarStopRepository } from "../repositories/icarStopRepository";
import { osrmRepository } from "../repositories/osrmRepository";
import { Coordinate } from "../types/coordinate";

export const icarStopService = {
	getAllStops: async (userPosition: Coordinate) => {
		const icarStops = await icarStopRepository.getAllStops();

		const icarStopsWithDistanceAndDuration = icarStops.map(async (icarStop) => {
			const { distance, duration } =
				await osrmRepository.getDistanceAndDuration(
					userPosition,
					icarStop.coordinate as Coordinate
				);

			return {
				...icarStop,
				distance,
				duration,
			};
		});

		return await Promise.all(icarStopsWithDistanceAndDuration);
	},
	getStopById: async (icarStopId: number, userPosition: Coordinate) => {
		const icarStop = await icarStopRepository.getStopById(icarStopId);
		if (!icarStop) {
			throw new NotFoundError(errorMessages.icarStop.notFound);
		}

		const { distance, duration } = await osrmRepository.getDistanceAndDuration(
			userPosition,
			icarStop.coordinate as Coordinate
		);

		return {
			...icarStop,
			distance,
			duration,
		};
	},
};
