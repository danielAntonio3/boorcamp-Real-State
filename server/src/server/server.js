const express = require('express');
const cors = require('cors');
const { connectDB } = require('./../database/database');
const { port } = require('./../config/configEnv');

class Server {
  constructor() {
    this.app = express();
    this.startDB();
    this.middleware();
    this.routes();
  }

  async startDB() {
    await connectDB();
  }

  middleware() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.get('/', (req, res) => {
      return res.send('Hello World!!!');
    });
  }

  listen() {
    this.app.listen(port, () => {
      console.log(`Server is running on port http://locahost:${port}`);
    });
  }
}

module.exports = Server;
