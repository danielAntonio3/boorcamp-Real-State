const { validationResult } = require('express-validator');

const validateInput = (req, res, next) => {
  //? Activar la validación
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }
  next();
};

module.exports = {
  validateInput,
};
