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
      apollo: '/apollo',
      auth: '/api/auth',
      user: '/api/user',
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
    apollo(this.app, this.paths.apollo);
    this.app.use(this.paths.user, require('./../routers/user.route'));
    this.app.use(this.paths.auth, require('./../routers/auth.route'));
  }

  listen() {
    this.app.listen(port, () => {
      console.log(`Server is running on port http://locahost:${port}`);
    });
  }
}

module.exports = Server;
