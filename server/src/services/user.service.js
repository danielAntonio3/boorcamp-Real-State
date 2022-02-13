const UserModel = require('./../schemas/users.schema');
class User {
  async find(data) {
    return await UserModel.findOne(data).exec();
  }

  async createUser(data) {
    const user = new UserModel.create(data);
    return { user, success: true };
  }

  async updateUser(data) {
    const user = await UserModel.findOneAndUpdate(
      { _id: data.id },
      { $set: data },
      { new: true }
    ).exec();
    user.password = undefined;
    return user;
  }
}

module.exports = User;
