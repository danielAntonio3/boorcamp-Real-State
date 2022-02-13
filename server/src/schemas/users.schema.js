const { mongoose } = require('../database/database');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: 8,
  },
  role: {
    type: String,
    enum: ['ADMIN', 'ASESOR', 'ARRENDADOR', 'ARRENDATARIO'],
  },
});

const UserModel = mongoose.model('Users', userSchema);

module.exports = UserModel;
