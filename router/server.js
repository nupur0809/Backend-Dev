import express from "express";
import userRoute from "./router/userRouter.js";
import registerRoute from "./router/registerRoute.js";
import dashboardRoute from "./router/dashboard.js";


const app = express();
const port = 3000;

// middleware
app.use(express.json());

// routes
app.use("/api/users", userRoute);
app.use("/api/dashboard",dashboardRoute);
app.use("/api/register", registerRoute);

// test route
app.get("/", (req, res) => {
  res.send("server is running");
});

// start server
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
