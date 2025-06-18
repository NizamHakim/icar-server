import { Coordinate } from "./coordinate";

export {};

declare global {
	namespace Express {
		interface Request {
			user?: { id?: number; position?: Coordinate };
			icar?: { id?: number; position?: Coordinate };
		}
	}
}
