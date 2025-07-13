export const config = {
	nodeEnv: process.env.NODE_ENV,
	server: {
		port: parseInt(process.env.PORT!),
	},
	database: {
		url: process.env.MYSQL_URL,
	},
	osrm: {
		url: process.env.OSRM_URL,
	},
	security: {
		jwtSecret: process.env.JWT_SECRET,
		saltRounds: process.env.BCRYPT_SALT_ROUNDS,
	},
};
