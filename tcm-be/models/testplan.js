import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let TestPlan = new Schema({
    title: {type: String},
    author: {type: String},
    desc: {type: String},
    created: {type: Date},
    updated: {type: Date},
});

export default mongoose.model('TestPlan', TestPlan);
