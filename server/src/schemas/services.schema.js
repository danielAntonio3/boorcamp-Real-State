const { mongoose } = require('../database/database');

const { Schema } = mongoose;

const serviceSchema = new Schema({
  kitchen: {
    type: Boolean,
    required: true,
  },
  parking: {
    type: Boolean,
    required: true,
  },
  patio: {
    type: Boolean,
    required: true,
  },
  wifi: {
    type: Boolean,
    required: true,
  },
  tv: {
    type: Boolean,
    required: true,
  },
  airConditioner: {
    type: Boolean,
    required: true,
  },
  smockingArea: {
    type: Boolean,
    required: true,
  },
});

module.exports = serviceSchema;
