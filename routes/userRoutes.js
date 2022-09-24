import express from 'express';
import passport from 'passport';
import { login, register } from '../controllers/userController.js';


const router = express.Router();


router.get('/', (req, res) => {
  res.json({
    message: 'Hello user routes',
  });
});

router.post('/register', register)
router.post('/login', login)

export default router;