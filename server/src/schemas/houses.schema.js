const { mongoose } = require('../database/database');
const { Schema } = mongoose;

const serviceSchema = require('./services.schema');

const houseSchema = new Schema({
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  zipCode: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  animals: {
    type: Boolean,
    required: true,
  },
  rating: {
    type: Number,
  },
  img: {
    type: String,
    required: true,
  },
  idUser: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  services: [serviceSchema],
});

const HouseModel = mongoose.model('Houses', houseSchema);

module.exports = HouseModel;
