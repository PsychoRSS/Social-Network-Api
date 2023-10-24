const { Schema, model } = require('mongoose');


const reactionSchema = new Schema(
    {
        // reactionId: {
            
        // },
        reactionBody: {
            type: String, required: true, max:280,
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date, default: Date.now 
        },
    },
  
)

reactionSchema.virtual('timestamp').get(() => {
    return this.createdAt
});

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction