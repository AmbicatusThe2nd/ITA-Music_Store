const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SensorDataSchema = new Schema(
  {
    sensor_type: {
      type: String,
      required: true,
    },
    manufacturer: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    serial_number: {
      type: String,
      required: true,
    },
    timestamp: {
      type: String,
      required: true,
    },
    notes_per_minute: {
      type: Number,
      required: true,
    },
    loudness: {
      type: Number,
      required: true,
    },
    string_vibration_amplitude: {
      type: {
        LOW_1: { type: Number },
        LOW_2: { type: Number },
        LOW_3: { type: Number },
        HIGH_3: { type: Number },
        HIGH_2: { type: Number },
        HIGH_1: { type: Number },
      },
    },
  },
  { collection: "guitar_sensor_data" }
);

module.exports = mongoose.model("sensorData", SensorDataSchema);