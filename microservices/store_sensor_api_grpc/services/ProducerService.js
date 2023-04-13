const Stomp = require("stomp-client");
const dotenv = require("dotenv");
dotenv.config();

const stompClient = new Stomp(
  process.env.ACTIVEMQ_URL,
  process.env.ACTIVEMQ_PORT,
  process.env.ACTIVEMQ_USER,
  process.env.ACTIVEMQ_PASS
);

function sendMessage(message) {
  stompClient.connect(function () {
    console.log("Connected to STOMP server");
    stompClient.publish(
      "sensor_data_queue",
      JSON.stringify(message),
      function () {
        console.log("Message sent");
        stompClient.disconnect();
      }
    );
  });
}

module.exports = { sendMessage };
