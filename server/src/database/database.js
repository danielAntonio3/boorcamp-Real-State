const mongoose = require('mongoose');
const { db } = require('./../config/configEnv');

const connectDB = async () => {
  console.log(db);
  try {
    await mongoose.connect(db);
    console.log('Conectado a MongoDB');
  } catch {
    console.log(`Error connecting to database: ${db}`);
    process.exit(1);
  }
};

module.exports = { connectDB, mongoose };
