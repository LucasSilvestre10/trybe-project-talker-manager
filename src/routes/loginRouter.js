const router = require('express').Router();

const randtoken = require('../utils/randToken');

const checkLoginData = require('../middlewares/checkLoginData');

router.post('/login', checkLoginData, (_request, response) => {
    const token = randtoken(16);

 return response.status(200).json({ token });
});

module.exports = router;