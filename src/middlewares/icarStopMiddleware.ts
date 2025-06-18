import { checkSchema } from "express-validator";
import { errorMessages } from "../errors/core/errorMessages";
import { Coordinate } from "../types/coordinate";

export const icarStopMiddleware = {
	validateGetAllStops: checkSchema(
		{
			userPosition: {
				custom: {
					bail: true,
					options: async (value, { req }) => {
						const userPosition = _parseUserPosition(value);

						req.user = { position: userPosition };
						return true;
					},
					errorMessage: errorMessages.user.invalidPosition,
				},
			},
		},
		["params"]
	),
	validateGetStopById: checkSchema({
		icarStopId: {
			isInt: {
				bail: true,
				errorMessage: errorMessages.icarStop.invalidId,
			},
		},
		userPosition: {
			custom: {
				bail: true,
				options: async (value, { req }) => {
					const userPosition = _parseUserPosition(value);

					req.user = { position: userPosition };
					return true;
				},
				errorMessage: errorMessages.user.invalidPosition,
			},
		},
	}),
};

function _parseUserPosition(userPositionStr: string): Coordinate {
	const [latitudeStr, longitudeStr] = userPositionStr.split(",");
	const latitude = parseFloat(latitudeStr);
	const longitude = parseFloat(longitudeStr);

	if (isNaN(latitude) || isNaN(longitude)) {
		throw new Error(errorMessages.user.invalidPosition);
	}

	return {
		latitude: latitude,
		longitude: longitude,
	};
}
