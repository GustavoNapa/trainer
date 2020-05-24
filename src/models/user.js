const mongose = require('mongoose');

const UserSchema = new mongose.Schema({
    name:{
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true,
    },
    password: {
        type: String,
        require: true,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const User = mongose.model('User', UserSchema);

module.exports = User;