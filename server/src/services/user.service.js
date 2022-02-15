const UserModel = require('./../schemas/users.schema');

class User {
  async find(data) {
    return await UserModel.findOne(data).exec();
  }

  async findAll() {
    return await UserModel.find().exec();
  }

  async createUser(data) {
    const user = await UserModel.create(data);
    return { user, success: true };
  }

  async updateUser(data) {
    const { _id, user } = data;
    const updateUser = await UserModel.findOneAndUpdate(
      { _id },
      { $set: user },
      { new: true }
    ).exec();
    return updateUser;
  }

  async deleteUser(_id) {
    return await UserModel.findOneAndRemove({ _id }).exec();
  }
}

module.exports = User;
