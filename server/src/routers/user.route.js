const { Router } = require('express');
const router = Router();

const { getUser, createUser } = require('../controllers');

router.get('/', [], getUser);
router.post('/', [], createUser);

module.exports = router;
