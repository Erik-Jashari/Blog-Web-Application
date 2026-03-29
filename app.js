import express from "express";
import postRoutes from "./routes/postRoutes.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Blog API running");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});