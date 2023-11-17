const router = require('express').Router();

const {
  getUsers, getUserById, addUser, editUserData, UpdateAvatar,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/:userId', getUserById);
router.post('/', addUser);
router.patch('/me', editUserData);
router.patch('/me/avatar', UpdateAvatar);

module.exports = router;
