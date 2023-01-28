import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { BlogStack, IconStack, StyledBox, StyledIcon } from '../../Components/Styles/commonStyles'
import HomeIcon from '@mui/icons-material/Home';
import { TextField } from '@mui/material';
import { useNavigate, useParams} from "react-router-dom";
import { getBlog } from '../../Services/Api';

const BlogSpot = () => {
    
  const [blog,setblog] = useState({
    title:"",
    description:""
  }); 

  const navigate = useNavigate();
  const {id} = useParams();

  const loadBlogDetails = async() => {
    const response = await getBlog(id)
    setblog(response.data)
}
  
useEffect(()=>{
  loadBlogDetails();
},[])
 


  return (
    <Stack direction='row'>
        <IconStack direction='column'>
        <StyledIcon>
        <HomeIcon onClick={() => navigate("/")}/>
        </StyledIcon>
        </IconStack>
        <BlogStack direction='column' >
          <StyledBox sx={{backgroundColor:"white !important"}}>
      
            <TextField read-only name='title' value={blog.title} label="Title" multiline />
            <TextField read-only name='description' value={blog.description}    label="Description" multiline rows={14}/>
          </StyledBox>
        </BlogStack>
    </Stack>
  )
}

export default BlogSpot