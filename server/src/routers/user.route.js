const { Router } = require('express');
const router = Router();

const { getFullUser } = require('../controllers');

router.get('/', [], getFullUser);

module.exports = router;
