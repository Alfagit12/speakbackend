const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* ✅ FAQAT SIZNING VERCEL DOMEN */
app.use(cors({
  origin: "https://speakmateuz.vercel.app",
  methods: ["GET", "POST"]
}));

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB ulandi"))
  .catch(err => console.error(err));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/user", require("./routes/user"));
app.use("/api/practice", require("./routes/practice"));

app.get("/", (req, res) => {
  res.send("SpeakMate backend ishlayapti");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server ishga tushdi"));
