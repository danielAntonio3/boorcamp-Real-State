const express = require('express');
const cors = require('cors');
const cookie = require('cookie-parser');

const { connectDB } = require('./../database/database');
const { port } = require('./../config/configEnv');
const apollo = require('./../routers/apollo');

class Server {
  constructor() {
    this.app = express();

    this.paths = {
      user: '/api/user',
      apollo: '/apollo',
    };

    this.startDB();
    this.middleware();
    this.routes();
  }

  async startDB() {
    await connectDB();
  }

  middleware() {
    this.app.use(
      cors({
        origin: [
          'http://localhost:4000',
          'http://localhost:3000',
          'https://studio.apollographql.com',
        ],
      })
    );
    this.app.use(express.json());
    this.app.use(cookie());
  }

  routes() {
    this.app.use(this.paths.user, require('./../routers/user.route'));
    apollo(this.app, this.paths.apollo);
  }

  listen() {
    this.app.listen(port, () => {
      console.log(`Server is running on port http://locahost:${port}`);
    });
  }
}

module.exports = Server;
