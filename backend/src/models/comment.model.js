import mongoose,{Schema} from "mongoose";

const commentSchema=new Schema({
    post:{
        type: Schema.Types.ObjectId,
        ref: "Post",
        required: true
    },
    author:{
        type: Schema.Types.ObjectId,
        ref: "User", required: true
    },
    text: {
        type: String,
        required: true
    },
    isAnonymous:{
        type:Boolean,
        default:true,
    },
},{
    timestamps:true
});

export const Comment=mongoose.model("comment",commentSchema)

