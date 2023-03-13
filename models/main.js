const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        min: [3, 'Name Must Be Longer than 3 chars'],
        max: [30, 'Name Must Be less than 30 chars'],
    }
})