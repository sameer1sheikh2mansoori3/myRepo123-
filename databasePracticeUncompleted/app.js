const dotenv = require("dotenv");
const express = require("express");
const cors = require('cors');
const app = express();
app.use(express.json());
dotenv.config(); // what does it means

const userModel = require("./models/user.js");
const connectDatabase = require("./db/db.js");
connectDatabase();
app.use(cors())
app.post("/insert-user", async (req, res) => {
  console.log(`dubbging chal rhi hai`);
  const { name, email } = req.body;
  console.log(name, email);
  // Data validation (consider more robust validation)
  if (!name || !email) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Create user model (using Mongoose for example)

  try {
    const newUser = new userModel({ name, email });
    await newUser.save();
    res.json({ message: "User added successfully" });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.post("/api/v1", async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const user1 = new userModel({
    name: name,
    password: password,
  });

  user1
    .save()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  res.status(200).json({
    message: "successfully send to database",
  });
});
app.listen(process.env.PORT, () => {
  console.log(`we are running at ${process.env.PORT}`);
});

// Replace with your MongoDB connection string
