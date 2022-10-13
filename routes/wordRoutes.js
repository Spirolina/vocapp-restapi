import express from 'express';
import passport from 'passport';
import { addWord, getWords } from '../controllers/wordController.js';


const router = express.Router();


router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({
    message: 'Hello word routes',
  });
});

router.get('/all', passport.authenticate('jwt', { session: false }), getWords);
router.post('/add', passport.authenticate('jwt', { session: false }), addWord)




export default router;