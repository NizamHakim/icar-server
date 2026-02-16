import dotenv from "dotenv";
dotenv.config();
import { createServer } from "./server";
const app = createServer();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
