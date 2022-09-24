import express, { application } from 'express';
import passport from 'passport';
import userRoutes from './userRoutes.js'

const router = express.Router();

router.use('/users', userRoutes)

router.get('/', (req, res) => {
  res.json({
    message: 'Hello api routes',
  });
});



export default router;