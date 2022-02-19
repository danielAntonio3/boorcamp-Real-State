const HouseModel = require('./../schemas/houses.schema');

class House {
  async find(data) {
    return await HouseModel.findOne(data).exec();
  }

  async findAll() {
    return await HouseModel.find().exec();
  }

  async createHouse(data) {
    const house = await HouseModel.create(data);
    return { house, success: true };
  }

  async updateHouse(data) {
    const { _id, house } = data;
    const updateHouse = await HouseModel.findOneAndUpdate(
      { _id },
      { $set: house },
      { new: true }
    ).exec();
    return updateHouse;
  }

  async deleteHouse(_id) {
    return await HouseModel.findOneAndRemove({ _id }).exec();
  }
}

module.exports = House;
