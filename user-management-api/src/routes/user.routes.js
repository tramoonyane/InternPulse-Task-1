const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

// Define routes under the `/api/users` path
router.post('/', userController.createUser); // POST /api/users

// Separate route to get all users
router.get('/', userController.getUsers); // GET /api/users

// Route to get a user by ID or name
router.get('/:id', userController.getUserById); // GET /api/users/:id
router.get('/name/:name', userController.getUserByName); // GET /api/users/name/:name

router.put('/:id', userController.updateUserById); // PUT /api/users/:id
router.put('/name/:name', userController.updateUserByName); // PUT /api/users/name/:name

router.delete('/:id', userController.deleteUserById); // DELETE /api/users/:id
router.delete('/name/:name', userController.deleteUserByName); // DELETE /api/users/name/:name

module.exports = router;
