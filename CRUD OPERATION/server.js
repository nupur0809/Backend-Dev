import express from "express";
import logfun from "./middleware.js";
import validateUser from "./validateUser.js";
import authMiddleware from "./authMiddleware.js";
import { config } from "dotenv";

config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// ✅ Task 1: Global Logger Middleware
app.use(logfun);

let data = [
  { id: 1, username: "qwert", password: "qwer123" },
  { id: 2, username: "ramesh", password: "123456" },
];

// HOME
app.get("/", (req, res) => {
  res.status(200).json({ message: "home route" });
});

// GET ALL USERS
app.get("/user", (req, res) => {
  res.status(200).json({
    message: "all users",
    data,
  });
});

// ✅ Task 2: Validation Middleware applied
app.post("/user", validateUser, (req, res) => {
  const { username, password } = req.body;

  const newUser = {
    id: data.length ? data[data.length - 1].id + 1 : 1,
    username,
    password,
  };

  data.push(newUser);

  res.status(201).json({
    message: "user created",
    user: newUser,
  });
});

// UPDATE USER
app.put("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const userIdx = data.findIndex((u) => u.id === id);

  if (userIdx === -1) {
    return res.status(404).json({
      message: "user not found",
    });
  }

  const { username, password } = req.body;

  if (password && password.length < 6) {
    return res.status(400).json({
      message: "password must be at least 6 characters",
    });
  }

  data[userIdx] = {
    ...data[userIdx],
    ...(username && { username }),
    ...(password && { password }),
  };

  res.status(200).json({
    message: "user updated",
    user: data[userIdx],
  });
});

// DELETE USER
app.delete("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const userIdx = data.findIndex((u) => u.id === id);

  if (userIdx === -1) {
    return res.status(404).json({
      message: "user not found",
    });
  }

  const deletedUser = data.splice(userIdx, 1);

  res.status(200).json({
    message: "user deleted",
    user: deletedUser[0],
  });
});

// ✅ Task 3: Protected Route
app.get("/profile", authMiddleware, (req, res) => {
  res.status(200).json({
    message: "Welcome Admin",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
