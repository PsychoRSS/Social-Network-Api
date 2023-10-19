const { Schema, model } = require('mongoose');


const userSchema = new Schema(
    {
        username: {
            String, unique: true, required: true, trimmed:true,
        },
        email: {
            String, required: true, unique: true, 
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'thought'
        }],
        freinds: [{
            type: Schema.Types.ObjectId,
            ref: 'user'
        }],
    },
  
)

userSchema.virtual('freindCount').get(() => {
    return this.freinds.length
});

const User = model('user', userSchema);

module.exports = User