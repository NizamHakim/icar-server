import dotenv from "dotenv";
dotenv.config();
import { config } from "../config/config";
import { createServer } from "./utils/server";

const app = createServer();

app.listen(config.server.port, () => {
	console.log(`Server is running on ${config.server.port}`);
});
