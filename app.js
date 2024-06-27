import express from 'express'
import userRoute from "./routes/userRoute.js"

const PORT = 6000;
const app = express()

app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("Hello world..");
});

app.use("*", (req, res) => {
  res.status(404).json ({
    message: "Not found",
    statusCode: 404,
  });
});

app.listen(PORT, console.log("server running on port 6000"))