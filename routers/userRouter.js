const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/', userController.getAllController)

router.get('/:id', userController.getOneController)

router.post('/', userController.postController)

router.put('/:id', userController.putController)

router.delete('/:id', userController.deleteController)

module.exports = router;
