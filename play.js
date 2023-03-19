const { connect } = require("./client.js");
const { setupInput } = require("./input");

const conn = connect();
setupInput(conn);
