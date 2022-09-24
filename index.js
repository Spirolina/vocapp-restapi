import * as dotenv from 'dotenv' 
import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
import passport from 'passport';
import {connectDB} from './configs/mongooseConfig.js'
import authConfig from './configs/authConfig.js'
import api from './routes/api.js'
import { errorLogger, errorResponder } from './modules/ErrorModule.js';

// dotenv init
dotenv.config()

// cors options
const corsOptions = {
    origin: '*',
    credentials: true, 
    optionSuccessStatus: 200,
};

//connect databse
connectDB()

  
// start express app
const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//init passport-js and jwt
authConfig(passport);
app.use(passport.initialize());

//set api routes
app.use('/api', api)

//default get route
app.get('/', (req, res) => {
    res.send('hello world');
  });
app.use(errorLogger)
app.use(errorResponder)
  //listen on port
app.listen(process.env.PORT || 5000, (req, res) => {
  console.log('Listening on port 5000')
  });