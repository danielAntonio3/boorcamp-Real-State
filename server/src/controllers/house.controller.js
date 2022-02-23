const House = require('./../services/house.service');

const houseServices = new House();

const { validateRole } = require('./../helpers');

// - OBTENER UNA CASA
const getHouse = async (parent, args, context, info) => {
  return await houseServices.find(args);
};

// - OBTENER TODAS LAS CASAS
const getFullHouses = async (parent, args, context, info) => {
  return await houseServices.findAll(args);
};

// - OBTENER CASAS DE UN USUARIO
const getHouseUser = async (parent, args, context, info) => {
  const payload = {
    idUser: context.user._id,
    limit: args.limit,
    skip: args.skip,
  };
  return await houseServices.findAll(payload);
};

// - CREAR UNA CASA
const createHouse = async (parent, args, context, info) => {
  const data = {
    ...args.house,
    idUser: context.user._id,
  };
  const { house } = await houseServices.createHouse(data);
  return house;
};

// - ACTUALIZAR UNA CASA
const updateHouse = async (parent, args, context, info) => {
  return await houseServices.updateHouse(args);
};

// - ELIMINAR UNA CASA
const deleteHouse = async (parent, args, context, info) => {
  validateRole(context);
  const house = await houseServices.deleteHouse(args._id);
  if (!house) {
    return 'House not found';
  }
  return 'House deleted';
};

module.exports = {
  getHouse,
  getFullHouses,
  getHouseUser,
  createHouse,
  updateHouse,
  deleteHouse,
};
