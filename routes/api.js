import express, { application } from 'express';
import passport from 'passport';
import userRoutes from './userRoutes.js'
import wordRoutes from './wordRoutes.js'
import meaningRoutes from './meaningRoutes.js'

const router = express.Router();

router.use('/users', userRoutes)
router.use('/words', wordRoutes)
router.use('/meaning', meaningRoutes)


router.get('/', (req, res) => {
  res.json({
    message: 'Hello api routes',
  });
});




export default router;