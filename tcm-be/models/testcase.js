import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let testcase = new Schema({
    title: {type: String},
    author: {type: String},
    desc: {type: String},
    priority: {type: String},
    status: {type: String, default: 'NEW'}
});

export default mongoose.model('testcase', testcase);
