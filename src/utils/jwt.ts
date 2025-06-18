import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "@prisma/client";

const JWT_SECRET = process.env.JWT_SECRET;

export const jwtUtils = {
	signToken: (user: User) => {
		if (!JWT_SECRET) throw new Error("JWT_SECRET is not defined");
		return jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET);
	},
	verifyToken: (token: string) => {
		if (!JWT_SECRET) throw new Error("JWT_SECRET is not defined");
		return jwt.verify(token, JWT_SECRET) as JwtPayload & {
			userId: number;
		};
	},
};
