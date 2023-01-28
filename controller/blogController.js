import Blog from "../model/blogSchema.js";

export const addBlog = async(req,res) => {
    const blog = req.body;
    const newBlog = new Blog(blog)

    try{
           await newBlog.save();
           res.status(201).json(newBlog)
    }catch(err){
            console.log('Error while saving blog', err)
           res.status(409).json({message: err.message})
    }
}


export const getBlogs = async(req,res) => {
    try{
      const blogs = await Blog.find({})
      res.status(200).json(blogs)
    }catch(err){
      res.status(404).json({message:err.message})
    }
}


export const getBlog = async(req,res) => {
  try{
    const blog = await Blog.findById(req.params.id)
    res.status(200).json(blog)
  }catch(err){
    res.status(404).json({message:err.message})
  }
}

