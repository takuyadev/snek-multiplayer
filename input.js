let connection;
let dir = "Move: up";

const handleUserInput = function (data) {
  if (data === "o") {
    connection.write("Say: EMERGENCY MEETING");
  }

  if (data === "p") {
    connection.write("Say: there's an imposter among us");
  }

  if (data === "m") {
    connection.write("Say: xd");
  }

  if (data === "w") {
    dir = "Move: up";
  }

  if (data === "a") {
    dir = "Move: left";
  }

  if (data === "d") {
    dir = "Move: right";
  }

  if (data === "s") {
    dir = "Move: down";
  }

  if (data === "\u0003") {
    process.exit();
  }
};

const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  setInterval(() => {
    connection.write(dir);
  },200);

  return stdin;
};

module.exports = { setupInput };
