import express from "express";
import cors from "cors";

import contactRoutes from "./routes/contactRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("IntellX running");
});

app.use("/api/contact", contactRoutes);

export default app;