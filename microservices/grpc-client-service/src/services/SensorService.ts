const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const protoPath = "../grpc-client-service/src/proto/sensor.proto";

require("dotenv").config();

const packageDefinition = protoLoader.loadSync(protoPath);
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

const client = new protoDescriptor.SensorService(
  process.env.GRPC_SENSOR_SERVICE_URL,
  grpc.credentials.createInsecure()
);

function getSensorData(): Promise<Response> {
  return new Promise((resolve: any, reject: any) => {
    client.GetSensorData({}, (err: Error, response: Response) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
}

export default { getSensorData } as const;
