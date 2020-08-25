import express from "express";
import { connectDB } from "./db";

const app = express();
const port = process.env.PORT || 8000;

app.use("/", (req, res) => {
  res.status(200).send("Welcome to Football app server");
});

const startServer = async () => {
  await connectDB();

  app.listen(port, (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`server started on ${port}`);
  });
};

startServer();
