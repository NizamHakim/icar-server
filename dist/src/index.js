"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = require("./utils/server");
dotenv_1.default.config();
const app = (0, server_1.createServer)();
const PORT = process.env.APP_PORT;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
