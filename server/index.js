import express from "express";
import { connectDB } from "./db";

import usercontroller from "./controllers/userController";

const app = express();
const port = process.env.PORT || 8000;

app.use("/", (req, res) => {
  res.status(200).send("Welcome to Football app server");
});

app.use("/api/v1/users", usercontroller);

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
