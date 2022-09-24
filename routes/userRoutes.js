import express from 'express';
import passport from 'passport';


const router = express.Router();


router.get('/', (req, res) => {
  res.json({
    message: 'Hello user routes',
  });
});


export default router;