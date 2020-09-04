const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const test_scoreSchema = new Schema({
    first_round: Number,
    second_round: Number,
    third_round: Number,
    users: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
});

const Test_score = mongoose.model ('test_score', test_scoreSchema);

module.exports = Test_score;