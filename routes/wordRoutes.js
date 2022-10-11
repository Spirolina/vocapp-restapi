import express from 'express';
import passport from 'passport';
import { addWord } from '../controllers/wordController.js';


const router = express.Router();


router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({
    message: 'Hello word routes',
  });
});

router.post('/add', passport.authenticate('jwt', {session: false}), addWord)



export default router;