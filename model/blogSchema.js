import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title:{
        type:String,
        requuired:true
    },
    description:{
        type:String,
        required:true
    },
})

const blog = mongoose.model('blog', blogSchema);
export default blog;