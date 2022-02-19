const House = require('./../services/house.service');

const houseServices = new House();

const getHouse = async (parent, args, context, info) => {
  return await houseServices.find(args);
};

const getFullHouses = async (parent, args, context, info) => {
  return await houseServices.findAll(args);
};

const filterHouse = async (parent, args, context, info) => {
  return await houseServices.findAll(args);
};

const createHouse = async (parent, args, context, info) => {
  const { house } = await houseServices.createHouse(args.house);
  return house;
};

const updateHouse = async (parent, args, context, info) => {
  return await houseServices.updateHouse(args);
};

const deleteHouse = async (parent, args, context, info) => {
  const house = await houseServices.deleteHouse(args._id);
  if (!house) {
    return 'House not found';
  }
  return 'House deleted';
};

module.exports = {
  getHouse,
  getFullHouses,
  filterHouse,
  createHouse,
  updateHouse,
  deleteHouse,
};
