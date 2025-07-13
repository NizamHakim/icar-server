"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    nodeEnv: process.env.NODE_ENV,
    server: {
        port: parseInt(process.env.PORT),
        host: process.env.HOST,
        url: appUrl(),
    },
    database: {
        host: process.env.MYSQLHOST,
        port: parseInt(process.env.MYSQLPORT),
        user: process.env.MYSQLUSER,
        password: process.env.MYSQLPASSWORD,
        name: process.env.MYSQLDATABASE,
        url: dbUrl(),
    },
    osrm: {
        host: process.env.OSRM_HOST,
        port: parseInt(process.env.OSRM_PORT),
        url: osrmUrl(),
    },
    security: {
        jwtSecret: process.env.JWT_SECRET,
        saltRounds: process.env.BCRYPT_SALT_ROUNDS,
    },
};
function appUrl() {
    const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
    const host = process.env.HOST;
    const port = process.env.PORT;
    return `${protocol}://${host}:${port}`;
}
function dbUrl() {
    const host = process.env.MYSQLHOST;
    const port = process.env.MYSQLPORT;
    const user = process.env.MYSQLUSER;
    const password = process.env.MYSQLPASSWORD;
    const database = process.env.MYSQLDATABASE;
    const mysqlUrl = `mysql://${user}:${password}@${host}:${port}/${database}`;
    process.env.MYSQL_URL = mysqlUrl;
    return mysqlUrl;
}
function osrmUrl() {
    const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
    const host = process.env.OSRM_HOST;
    const port = process.env.OSRM_PORT;
    return `${protocol}://${host}:${port}/route/v1/driving`;
}
