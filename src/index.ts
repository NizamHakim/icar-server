import dotenv from "dotenv";
import { createServer } from "./utils/server";
dotenv.config();

const app = createServer();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`);
});
