import dotenv from "dotenv";
dotenv.config();
import { createServer } from "./utils/server";
import { config } from "../config/config";

const app = createServer();

app.listen(config.server.port, () => {
	console.log(`Server is running on ${config.server.url}`);
});
