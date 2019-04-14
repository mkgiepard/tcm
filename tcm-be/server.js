import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import TestCase from './models/testcase';
import TestPlan from './models/testplan';
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
// =================== test case ==============================================
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
      .then(tc => {res.status(200).json({'testcase': 'TestCase create: OK'});})
      .catch(err => {res.status(400).send('TestCase create: FAIL');})
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
              .then(tc => {res.json('TestCase update: OK');})
              .catch(err => {res.status(400).send('TestCase update: FAIL');});
        }
    });
});

// Remove a testcase from db
router.route('/testcases/delete/:id').get((req, res) => {
    TestCase.findByIdAndRemove({_id: req.params.id}, (err, tc) => {
        if (err) {
            res.json(err);
        } else {
            res.json('TestCase delete: OK');
        }
    });
});

// =================== test plan ==============================================
// Get all the testplans from the db
router.route('/testplans').get((req, res) => {
    TestPlan.find((err, tps) => {
        if (err)
            console.log(err);
        else
            res.json(tps);
    });
});

// Get one testplan from the db
router.route('/testplans/:id').get((req, res) => {
    TestPlan.findById(req.params.id, (err, tp) => {
        if (err) {
            console.log(err);
        } else {
            res.json(tp);
        }
    });
});

// Add new testplan to the db
router.route('/testplans/add').post((req, res) => {
    let tp = new TestPlan(req.body);
    let now = Date.now();
    tp.created = now;
    tp.updated = now;
    tp.save()
      .then(tc => {res.status(200).json({'testplan': 'TestPlan create: OK'});})
      .catch(err => {res.status(400).send('TestPlan create: FAIL');})
});

// Update a testplan in the db
router.route('/testplans/update/:id').post((req, res) => {
    TestPlan.findById(req.params.id, (err, tp) => {
        if (!tp) {
            return next(new Error('Could not load document'));
        } else {
            tp.title = req.body.title;
            tp.author = req.body.author;
            tp.desc = req.body.desc,
            tp.updated = Date.now();
            tp.save()
              .then(tc => {res.json('TestPlan update: OK');})
              .catch(err => {res.status(400).send('TestPlan update: FAIL');});
        }
    });
});

// Remove a testplan from db
router.route('/testplans/delete/:id').get((req, res) => {
    TestPlan.findByIdAndRemove({_id: req.params.id}, (err, tp) => {
        if (err) {
            res.json(err);
        } else {
            res.json('TestPlan delete: OK');
        }
    });
});

// Attach router
app.use('/', router);

// Configure server to listen on port 4000
app.listen(4000, () => console.log('Express server running'));

// Dummy response
app.get('/', (req, res) => res.send('dummy hello world!'));
