const { Schema, model } = require('mongoose');


const userSchema = new Schema(
    {
        username: {
           type:String, unique: true, required: true, trimmed:true,
        },
        email: {
            type: String, required: true, unique: true, 
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