import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;

let TestCase = new Schema({
    title: {type: String},
    author: {type: String},
    desc: {type: String},
    priority: {type: String},
    status: {type: String, default: 'NEW'},
    testplan_id: {type: ObjectId},
});

export default mongoose.model('TestCase', TestCase);
