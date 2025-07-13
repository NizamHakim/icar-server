"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./utils/server");
const config_1 = require("../config/config");
const app = (0, server_1.createServer)();
app.listen(config_1.config.server.port, () => {
    console.log(`Server is running on ${config_1.config.server.url}`);
});
