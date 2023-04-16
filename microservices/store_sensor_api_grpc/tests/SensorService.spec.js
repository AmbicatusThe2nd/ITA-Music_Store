const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
// const Sensor = require("../services/SensorService");
const { Sensor } = require('../models/SensorData');
const { expect } = require('chai');

const PROTO_PATH = "./proto/sensor.proto";

describe('SensorService', () => {
    let server;
    let client;
    let mongodbServer;

    before(async () => {
        mongodbServer = await MongoMemoryServer.create();

        await mongoose.connect(mongodbServer.getUri(), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const packageDefinition = protoLoader.loadSync(PROTO_PATH);
        const sensorProto = grpc.loadPackageDefinition(packageDefinition).SensorService;

        server = new grpc.Server();

        const port = await new Promise((resolve, reject) => {
            server.bindAsync('localhost:0', grpc.ServerCredentials.createInsecure(), (err, port) => {
                if (!err) {
                    resolve(port);
                }
                else {
                    reject(port);
                }
            });
        });
        server.start();

        const clientOptions = {
            host: 'localhost',
            port,
            protoLoader,
            protoPath: PROTO_PATH,
            keepCase: true
        };

        client = new sensorProto(`localhost:${50051}`, grpc.credentials.createInsecure());
    });

    after(async () => {
        await new Promise((resolve, reject) => {
            server.tryShutdown((err) => {
                if (!err) {
                    resolve();
                }
                else {
                    reject(err);
                }
            });
        });


        client.close();

        await mongoose.disconnect();
        await mongodbServer.stop();
    });

    describe('GetSensorData', () => {
        it('should return all sensors', async () => {
            const res = await new Promise((resolve, reject) => {
                client.GetSensorData({}, (err, response) => {
                    if (!err) {
                        resolve(response);
                    }
                    else {
                        reject(err);
                    }
                });
            });

            expect(res).to.exist;
            expect(res.sensors.length).to.be.above(0);
        });
    });
})