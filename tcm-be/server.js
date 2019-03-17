import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import TestCase from './models/testcase';
import { runInNewContext } from 'vm';

// Define app and router
const app = express();
const router = express.Router();

// Attach cors and bodyParser to the app
app.use(cors());
app.use(bodyParser.json());

// Configure mongoose connection
mongoose.connect('mongodb://localhost:27017/tcm-alpha');
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connected!');
});

// Attach endpoints to the router
// Get all the testcases from the db
router.route('/testcases').get((req, res) => {
    TestCase.find((err, tcs) => {
        if (err)
            console.log(err);
        else
            res.json(tcs);
    });
});

// Get one testcase from the db
router.route('/testcases/:id').get((req, res) => {
    TestCase.findById(req.params.id, (err, tc) => {
        if (err) {
            console.log(err);
        } else {
            res.json(tc);
        }
    });
});

// Add new testcase to the db
router.route('/testcases/add').post((req, res) => {
    let tc = new TestCase(req.body);
    tc.save()
      .then(tc => {res.status(200).json({'testcase': 'Added success'});})
      .catch(err => {res.status(400).send('Failed to add new testcase');})
});

// Update a testcase in the db
router.route('/testcases/update/:id').post((req, res) => {
    TestCase.findById(req.params.id, (err, tc) => {
        if (!tc) {
            return next(new Error('Could not load document'));
        } else {
            tc.title = req.body.title;
            tc.author = req.body.author;
            tc.desc = req.body.desc,
            tc.priority = req.body.priority;
            tc.status = req.body.status;
            tc.save()
              .then(tc => {res.json('Update done');})
              .catch(err => {res.status(400).send('Update failed');});
        }
    });
});

// Remove a testcase from db
router.route('/testcases/delete/:id').get((req, res) => {
    TestCase.findByIdAndRemove({_id: req.params.id}, (err, tc) => {
        if (err) {
            res.json(err);
        } else {
            res.json('Removed seuccessfully');
        }
    });
});

// Attach router
app.use('/', router);

// Configure server to listen on port 4000
app.listen(4000, () => console.log('Express server running'));

// Dummy response
app.get('/', (req, res) => res.send('dummy hello world!'));
