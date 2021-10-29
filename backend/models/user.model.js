const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  { timestamps: true } // Automatically manages `createdAt` and `updatedAt` properties
);

const User = mongoose.model("User", userSchema);

module.exports = User;
