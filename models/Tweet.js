import mongoose from "mongoose";


const TweetSchema = new mongoose.Schema({
    user:{
        type: mongoose.Types.ObjectId, 
        ref: 'User',
    },
// title:{
//     type: String, 
//     required: true,
//     minLength: 3,
//     maxLength: 50

// },
    content:{
        type: String,
        required: true, 
        minLength:1,
        maxLength: 270

    }, 
    // author: {
    //     type: String,
    //     required: true
    // }, 
    likes:{
        type: Number,
        default: 0
    }
}, {timestamps: true}

)

export default mongoose.model('Tweet', TweetSchema)