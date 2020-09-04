const express = require('express');
// const router = express.Router();
const router = require('express-promise-router')();

const Userscontroller = require('../controllers/users');

router.route('/')
.get(Userscontroller.index)
.post(Userscontroller.newUser);

router.route('/:userId')
.get(Userscontroller.getUser)
.put(Userscontroller.replaceUser)
.patch(Userscontroller.updateUser);

router.route('/:userId/test_scores')
.get(Userscontroller.getUserTest_scores)
.post(Userscontroller.newUserTest_scores);

router.route('/:userId/test_scores/avg')
.get(Userscontroller.getUserTest_scoresAvg);


module.exports = router;