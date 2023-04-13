const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const Sensor = require("../models/SensorData");
const { sendMessage } = require("../services/ProducerService");


const PROTO_PATH = "./proto/sensor.proto";

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
const sensorProto = grpc.loadPackageDefinition(packageDefinition);

function getSensorData(_, callback) {
  Sensor.find({})
    .then((sensors) => {
      const sensorList = {
        sensors: sensors.map((sensor) => ({
          sensor_type: sensor.sensor_type,
          manufacturer: sensor.manufacturer,
          model: sensor.model,
          serial_number: sensor.serial_number,
          timestamp: sensor.timestamp,
          notes_per_minute: sensor.notes_per_minute,
          loudness: sensor.loudness,
          string_vibration_amplitude: {
            low1: sensor.string_vibration_amplitude.low1,
            low2: sensor.string_vibration_amplitude.low2,
            low3: sensor.string_vibration_amplitude.low3,
            high3: sensor.string_vibration_amplitude.high3,
            high2: sensor.string_vibration_amplitude.high2,
            high1: sensor.string_vibration_amplitude.high1,
          },
        })),
      };
      callback(null, sensorList);
    })
    .catch((err) => {
      console.error(err);
      callback(err);
    });
}

function getById(call, callback) {
  const sensorId = call.request.id;
  Sensor.findById(sensorId)
    .then((sensor) => {
      if (!sensor) {
        return callback({
          code: grpc.status.NOT_FOUND,
          message: "Sensor not found",
        });
      }
      const response = {
        sensor_type: sensor.sensor_type,
        manufacturer: sensor.manufacturer,
        model: sensor.model,
        serial_number: sensor.serial_number,
        timestamp: sensor.timestamp,
        notes_per_minute: sensor.notes_per_minute,
        loudness: sensor.loudness,
        string_vibration_amplitude: {
          low1: sensor.string_vibration_amplitude.low1,
          low2: sensor.string_vibration_amplitude.low2,
          low3: sensor.string_vibration_amplitude.low3,
          high3: sensor.string_vibration_amplitude.high3,
          high2: sensor.string_vibration_amplitude.high2,
          high1: sensor.string_vibration_amplitude.high1,
        },
      };
      sendMessage(response);
      callback(null, response);
    })
    .catch((err) => {
      console.error(err);
      callback(err);
    });
}

function deleteById(call, callback) {
  const sensorId = call.request.id;
  Sensor.findByIdAndDelete(sensorId)
    .then((sensor) => {
      if (!sensor) {
        return callback({
          code: grpc.status.NOT_FOUND,
          message: "Sensor not found",
        });
      }
      callback(null, {});
    })
    .catch((err) => {
      console.error(err);
      callback(err);
    });
}

function setupSensorService(server) {
  server.addService(sensorProto.SensorService.service, {
    GetSensorData: getSensorData,
    GetById: getById,
    Delete: deleteById,
  });
}

module.exports = { setupSensorService };