require('dotenv').config({
  path: process.cwd() + '/src/.env',
});

const config = {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET,
  db: process.env.DB,
};

module.exports = config;
