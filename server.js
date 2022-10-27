const http = require("http");
let app = require("./app");

const port = process.env.PORT || 3006;

const server = http.createServer(app);

console.log("running on http://localhost/" + port);
server.listen(port);