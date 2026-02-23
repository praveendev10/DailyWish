import express, { Request, Response } from "express";
import { connectDB } from "./config/db";
import router from "./routes/user.routes";
const app = express();
const PORT = 3000;
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Hii");
});
app.use("/", router);
const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Server failed to start", error);
    process.exit(1);
  }
};

startServer();