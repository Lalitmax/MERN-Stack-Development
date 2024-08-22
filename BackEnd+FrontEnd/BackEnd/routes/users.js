import express from 'express'
import userController from '../Controllers/authController.js';

const router = express.Router();


router.post('/login', userController.userLogin);
router.post('/register', userController.userRegister);

export default router;