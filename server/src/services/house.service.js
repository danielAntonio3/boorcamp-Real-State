const HouseModel = require('./../schemas/houses.schema');

class House {
  // - BUSCAR UNA CASA POR ID
  async find(data) {
    return await HouseModel.findOne(data).exec();
  }

  // - BUSCAR TODAS LAS CASAS (PAGINADAS Y POR idUser, POR UN FILTRO, SIN FILTRO)
  async findAll(data) {
    const { limit, skip, payload, idUser } = data;
    if (idUser) {
      return await HouseModel.find({ idUser: idUser })
        .skip(skip)
        .limit(limit)
        .exec();
    }
    if (payload) {
      return await HouseModel.find(payload).skip(skip).limit(limit).exec();
    } else {
      return await HouseModel.find().skip(skip).limit(limit).exec();
    }
  }

  // - CREAR UNA CASA
  async createHouse(data) {
    const house = await HouseModel.create(data);
    return { house, success: true };
  }

  // - ACTUALIZAR UNA CASA
  async updateHouse(data) {
    const { _id, house } = data;
    const updateHouse = await HouseModel.findOneAndUpdate(
      { _id },
      { $set: house },
      { new: true }
    ).exec();
    return updateHouse;
  }

  // - ELIMINAR UNA CASA
  async deleteHouse(_id) {
    return await HouseModel.findOneAndRemove({ _id }).exec();
  }
}

module.exports = House;
