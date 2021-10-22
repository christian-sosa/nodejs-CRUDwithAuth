const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;
 
const userSchema = new Schema({
        name: {
            type: String,
            required: [true, 'Name required']
        },
        lastName: {
            type: String,
            required: [true, 'Last Name required']
        },
        email: {
            type: String,
            required: [true, 'Email required'],
            unique: true,
            index: true
        },
        password: {
            type: String,
            required: [true, 'Password required']
        }
    },
    {timestamps: true}
);

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

userSchema.plugin(uniqueValidator, {message: 'already exist in the DB'});

module.exports = mongoose.model('users', userSchema);