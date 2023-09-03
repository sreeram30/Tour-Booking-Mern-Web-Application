import express from 'express';
import { deleteUser, getSingleUser, updateUser, getAllUser } from '../controllers/userController.js';
import { verifyAdmin, verifyUser } from './../utils/verifyToken.js';

const router = express.Router();


// Update user
router.put('/:id', verifyUser, updateUser);

// Delete user
router.delete('/:id', verifyUser, deleteUser);

// Get single user
router.get('/:id', verifyUser, getSingleUser);

// Get all users
router.get('/', verifyAdmin, getAllUser);

export default router;