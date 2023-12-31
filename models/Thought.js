const { Schema, model } = require('mongoose');


const thoughtSchema = new Schema(
    {
        thoughtText: {
           type: String, unique: true, required: true, min: 1,max: 280
        },
        createdAt: {
            type: Date, default: Date.now 
        },
        username: [{
            type: String,
            required: true

        }],
        freinds: [{
            type: Schema.Types.ObjectId,
            ref: 'user'
        }],
    },
  
)

thoughtSchema.virtual('freindCount').get(() => {
    return this.freinds.length
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought