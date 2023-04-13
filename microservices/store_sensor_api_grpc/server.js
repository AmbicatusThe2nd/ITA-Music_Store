const grpc = require("@grpc/grpc-js");
const mongoose = require("mongoose");
const { setupSensorService } = require("./services/SensorService");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
});

mongoose.connection.on("error", (err) => {
  console.log(err + "  The database is currently not available");
});

mongoose.connection.on("open", () => {
  console.log("Successfully connected");
});

const server = new grpc.Server();

setupSensorService(server);

server.bindAsync(
  "127.0.0.1:50051",
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    console.log("Server running at http://127.0.0.1:50051");
    server.start();
  }
);
