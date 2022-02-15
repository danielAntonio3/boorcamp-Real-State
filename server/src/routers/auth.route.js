const { Router } = require('express');
const { check } = require('express-validator');

const { validateInput } = require('./../middlewares/index');
const { login } = require('../controllers');

const router = Router();

router.post(
  '/',
  [
    check('email').isEmail(),
    check('password').isLength({ min: 8 }),
    validateInput,
  ],
  login
);

module.exports = router;
