const net = require("net");
const name = process.argv[2]


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("connected t server!!!!!!!!");
    conn.write("Name: SNK");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 500)
  });

  conn.on("data", (data) => {
    console.log(data);
    conn.end();
  });

  conn.on("end", (data) => {
    console.log("you end!!! ahhaha");
  });

  return conn;
};

module.exports = { connect };
