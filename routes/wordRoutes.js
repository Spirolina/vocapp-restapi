import express from 'express';
import { addWord } from '../controllers/wordController.js';


const router = express.Router();


router.get('/', (req, res) => {
  res.json({
    message: 'Hello word routes',
  });
});

router.post('/add', addWord)



export default router;