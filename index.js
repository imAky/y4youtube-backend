import express from "express";
import dotenv from "dotenv";
import videoRoutes from "./routes/videoRoutes.js";
import cors from "cors";
import job from "./cron/cron.js";
dotenv.config();

const PORT = process.env.PORT || 3000;

job.start();

const app = express();

// Middleware

app.use(express.json());
app.use(
  cors({
    origin: "https://y4youtube.vercel.app",
    optionsSuccessStatus: 200,
  })
);

// Routes

app.use("/videos", videoRoutes);
app.get("/",(req,  res) => {
  res.sendStatus(200)
})

app.listen(PORT, () => {
  console.log(`Server connected on PORT ${PORT}`);
});
