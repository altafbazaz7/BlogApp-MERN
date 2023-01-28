import express from 'express';
import { addBlog, editBlog, getBlogs, getBlog} from '../controller/blogController.js';

const routes = express.Router();

routes.post('/add',addBlog)
routes.get('/all',getBlogs)
routes.get('/:id',getBlog)

export default routes;