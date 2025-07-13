export const config = {
	nodeEnv: process.env.NODE_ENV,
	server: {
		port: parseInt(process.env.PORT!),
		host: process.env.HOST,
		url: appUrl(),
	},
	database: {
		host: process.env.MYSQLHOST,
		port: parseInt(process.env.MYSQLPORT!),
		user: process.env.MYSQLUSER,
		password: process.env.MYSQLPASSWORD,
		name: process.env.MYSQLDATABASE,
		url: process.env.MYSQL_URL,
	},
	osrm: {
		host: process.env.OSRM_HOST,
		port: parseInt(process.env.OSRM_PORT!),
		url: process.env.OSRM_URL,
	},
	security: {
		jwtSecret: process.env.JWT_SECRET,
		saltRounds: process.env.BCRYPT_SALT_ROUNDS,
	},
};

function appUrl(): String {
	const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
	const host = process.env.HOST;
	const port = process.env.PORT;
	return `${protocol}://${host}:${port}`;
}
