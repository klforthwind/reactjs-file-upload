const express = require("express");
const upload = require("./upload");
const cors = require("cors");

const server = express();

let corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
};

server.use(cors(corsOptions));

server.post("/upload", upload);

const PORT = 8000;

server.listen(PORT, () => {
  console.log("Server started on port "+PORT+"!");
});