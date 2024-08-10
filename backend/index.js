const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
const z = require("zod");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config")
const { User } = require("./database");

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

  const { success } = signupBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({ message: "invalid input" });
  }

  const existingUser = await User.findOne({
    email: req.body.email,
  });

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
    const token = jwt.sign(
      {
        userId,
      },
      JWT_SECRET
    );
    res.status(200).json({
      message: "User created successfully",
      token: token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error generating token" });
  }
});

app.post("/itinerary", (req, res)=>{ 
  const data = req.data;
  
})


app.post('/saveplan', (req, res)=>{
        const body = req.body;
        console.log(body)
})
app.post('/chat', (req, res) => {
  const userMessage = req.body.message;

  // Logic to generate a reply based on user input
  let reply;
  if (userMessage.toLowerCase().includes('hello')) {
    reply = 'Hi there! How can I assist you today?';
  } else {
    reply = "I'm not sure I understand, but I'm here to help!";
  }

  res.json({ reply });
});


app.use((req, res, next) => {
  res.status(404).json({ error: "Not Found" });
});

app.use((err, req, res, next) => {
  console.log("error in server");
  console.error(err.stack);
  res.status(500).json({ error: "Something broke!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

