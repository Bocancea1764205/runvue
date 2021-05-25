const mongoose = require("mongoose");

const runSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" },
  date: { type: Date, default: Date.now },
  time: { type: String, default: "00:00:00.00" },
  meters: { type: Number, default: 0 },
  path: {
    type: Array,
    coordinates: {
      type: [Number],
      default: [],
    },
  },
});
const Run = mongoose.model("run", runSchema);
module.exports = Run;
