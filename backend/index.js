const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
const z = require("zod");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");
const { User } = require("./database");
const axios = require("axios");

app.use(cors());
app.use(express.json());

const signupBody = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
});

app.post("/signup", async (req, res) => {
  console.log("Entered into backend");
  console.log(req.body);

  const result = signupBody.safeParse(req.body);
  if (!result.success) {
    return res.status(411).json({ message: "Invalid input" });
  }

  const existingUser = await User.findOne({ email: req.body.email });

  if (existingUser) {
    return res.status(411).json({
      message: "Email already exists",
      email: req.body.email,
    });
  }

  const user = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });

  const userId = user._id;

  try {
    const token = jwt.sign({ userId }, JWT_SECRET);
    res.status(200).json({
      message: "User created successfully",
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error generating token" });
  }
});

app.post("/itinerary", async (req, res) => {
  console.log("Request received:", req.body);

  const data1 = { data: req.body.data };
  const data2 = { state: req.body.state, userid: req.body.userid };

  try {
    const response1 = await axios.post("http://localhost:5000/costAndPlan", data1);
    const response2 = await axios.post("http://localhost:5000/recommend", data2 );
    console.log(response)
    res.status(200).json({ response1: response1.data, response2: response2.data });
  } catch (error) {
    console.error("Error in /itinerary route:", error);
    res.status(500).json({ error: "Error processing itinerary" });
  }
});

app.post("/saveplan", (req, res) => {
  const body = req.body;
  console.log("Plan saved:", body);
  res.status(200).json({ message: "Plan saved successfully" });
});

app.post("/chat", (req, res) => {
  const userMessage = req.body.message;
  let reply;

  if (userMessage.toLowerCase().includes("hello")) {
    reply = "Hi there! How can I assist you today?";
  } else {
    reply = "I'm not sure I understand, but I'm here to help!";
  }

  res.json({ reply });
});

app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

app.use((err, req, res) => {
  console.error("Server error:", err.stack);
  res.status(500).json({ error: "Something broke!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
