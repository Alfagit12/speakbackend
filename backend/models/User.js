const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  password: String,
  stats: {
    totalPoints: { type: Number, default: 0 },
    practicesCompleted: { type: Number, default: 0 },
    streak: { type: Number, default: 0 },
    level: { type: Number, default: 1 }
  }
});

module.exports = mongoose.model("User", UserSchema);
