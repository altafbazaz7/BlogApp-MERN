import React, { useEffect, useState } from 'react'
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { DisplayBlogs, StyledIcon } from '../../Components/Styles/commonStyles';
import { getBlogs } from '../../Services/Api';
import { Stack } from '@mui/material';
import BlogCard from "../../Components/BlogCard/BlogCard";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const [blogs,setblogs]=useState([]);

  useEffect(()=>{
      getAllBlogs();
  },[])

  const getAllBlogs = async () => {
    let response = await getBlogs();
    setblogs(response.data);
}
  return (
    <>
       <StyledIcon sx={{position:"absolute",bottom:"15%",right:"5%"}}>
              <ContentPasteIcon onClick={() => navigate("/add")}/>
              </StyledIcon>
    <DisplayBlogs direction="row" >
      {
        blogs.map((curElem,index)=>{
          return(
            <>
              <BlogCard curElem={curElem} index={index}/>
           
    </>
          )
        })
      }
   
    </DisplayBlogs>

    </>
  )
}

export default Home