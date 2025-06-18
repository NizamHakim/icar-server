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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSocketIO = void 0;
const ws_1 = __importDefault(require("ws"));
const icarService_1 = require("../services/icarService");
const setupSocketIO = (httpServer) => {
    const wss = new ws_1.default.Server({ server: httpServer });
    const ICARS = new Map();
    const USERS = [];
    wss.on("connection", (ws, req) => __awaiter(void 0, void 0, void 0, function* () {
        const clientType = req.headers["client-type"];
        if (clientType === "icar") {
            const isConnected = yield handleIcarConnect(ws, req);
            if (!isConnected)
                return;
            console.log("ICAR connected");
            ICARS.set(ws, parseInt(req.headers["icar-id"]));
            handleIcarMessage(ws);
        }
        else if (clientType === "user") {
            USERS.push(ws);
        }
        else {
            ws.close();
            return;
        }
        ws.on("close", () => __awaiter(void 0, void 0, void 0, function* () {
            if (clientType === "icar") {
                yield handleIcarDisconnect(ws);
                ICARS.delete(ws);
                console.log("ICAR disconnected");
            }
        }));
    }));
    function handleIcarConnect(ws, req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield icarService_1.icarService.connectIcar(req.headers["icar-id"]);
                return true;
            }
            catch (error) {
                console.error(error);
                ws.close();
                return false;
            }
        });
    }
    function handleIcarMessage(ws) {
        ws.on("message", (message) => {
            const data = JSON.parse(message);
            console.log("Received message from ICAR:", data);
            USERS.forEach((user) => {
                if (user.readyState === ws_1.default.OPEN) {
                    user.send(JSON.stringify({
                        type: "position",
                        icarId: parseInt(data.icarId),
                        position: data.position,
                    }), { binary: false });
                }
            });
            ws.send(message, { binary: false });
        });
    }
    function handleIcarDisconnect(ws) {
        return __awaiter(this, void 0, void 0, function* () {
            const icarId = ICARS.get(ws);
            if (!icarId)
                return;
            try {
                const icar = yield icarService_1.icarService.disconnectIcar(icarId);
                USERS.forEach((user) => {
                    if (user.readyState === ws_1.default.OPEN) {
                        user.send(JSON.stringify({ type: "disconnected", icar: icar }), {
                            binary: false,
                        });
                    }
                });
            }
            catch (error) {
                console.error(error);
            }
        });
    }
};
exports.setupSocketIO = setupSocketIO;
