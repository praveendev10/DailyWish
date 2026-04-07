import express, { Request, Response } from "express";
import { connectDB } from "./config/db";
import router from "./routes/user.routes";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = 3000;
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Hii");
});
app.use("/", router);
console.log("ENV:", process.env);
console.log("MONGO_URI:", process.env.MONGO_URI);
const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log("ENV:", process.env);
      console.log("MONGO_URI:", process.env.MONGO_URI);
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Server failed to start", error);
    process.exit(1);
  }
};

startServer();