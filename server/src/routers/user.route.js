const { Router } = require('express');
const router = Router();

const { getUser } = require('../controllers');

router.get('/', [], getUser);

module.exports = router;
