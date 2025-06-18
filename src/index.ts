import dotenv from "dotenv";
import { createServer } from "./utils/server";

dotenv.config();

const app = createServer();
const PORT = process.env.APP_PORT;

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
