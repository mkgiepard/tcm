import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import testcase from './models/testcase';

// Define app and router
const app = express();
const router = express.Router();

// Attach cors and bodyParser to the app
app.use(cors());
app.use(bodyParser.json());

// Configure mongoose connection
// mongoose.connect();
// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log('MongoDB connected!');
// });

// Attach router
app.use('/', router);

// Configure server to listen on port 4000
app.listen(4000, () => console.log('Express server running'));

// Dummy response
app.get('/', (req, res) => res.send('dummy hello world!'));