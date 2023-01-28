import { Stack } from '@mui/system'
import React, { useState } from 'react'
import { BlogStack, FormatStack, IconStack, StyledBox, StyledIcon } from '../../Components/Styles/commonStyles'
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import HomeIcon from '@mui/icons-material/Home';
import { TextField } from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachmentIcon from '@mui/icons-material/Attachment';
import { addBlog } from '../../Services/Api';
import { useNavigate} from "react-router-dom";

const BlogSpot = () => {

  const [text, setText] = useState("");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [color, setColor] = useState("black");
  const [bulletPoints, setBulletPoints] = useState(false);
  const [attachments, setAttachments] = useState([]);

  const handleBold = () => {
    setBold(!bold);
  };

  const handleItalic = () => {
    setItalic(!italic);
  };

  const handleUnderline = () => {
    setUnderline(!underline);
  };

  const handleColor = (e) => {
    setColor(e.target.value);
  };

  const handleBulletPoints = () => {
    setBulletPoints(!bulletPoints);
  };

  const handleAttachment = (e) => {
    setAttachments([...attachments, e.target.files[0]]);
  };


  const navigate = useNavigate();

  const [blog,setblog] = useState({
    title:"",
    description:""
  });

  const handleChange = (event) => {
        setblog({
          ...blog,
          [event.target.name]:event.target.value
        })
        console.log(blog)
  }

  const handleAdd = async() => {
    await addBlog(blog);
    navigate('/');
  }
  
  return (
    <Stack direction='row'>
        <IconStack direction='column'>
        <StyledIcon>
        <HomeIcon onClick={() => navigate("/")}/>
        </StyledIcon>
        <StyledIcon>
        <ContentPasteIcon onClick={handleAdd}/>
        </StyledIcon>
        </IconStack>
        <BlogStack direction='column'>
          <StyledBox>
          <FormatStack direction='row'>
      <FormatBoldIcon  onClick={handleBold}/>
      <FormatItalicIcon onClick={handleItalic}/>
      <FormatUnderlinedIcon onClick={handleUnderline}/>
      <FormatListBulletedIcon onClick={handleBulletPoints}/>
      <FormatColorTextIcon onChange={handleColor}/>
      <AttachmentIcon  onChange={handleAttachment} type="file"/>
    
          </FormatStack>
           <TextField sx={{fontWeight: bold ? "bold" : "light", fontStyle: italic ? "italic" : "normal", textDecoration: underline ? "underline" : "none", color: color,}} onChange={handleChange} name='title' value={blog.title} label="Title" multiline />
            <TextField sx={{fontWeight: bold ? "bold" : "light", fontStyle: italic ? "italic" : "normal", textDecoration: underline ? "underline" : "none", color: color,}}  onChange={handleChange} name='description' value={blog.description}    label="Description" multiline rows={14}/>
          </StyledBox>
        </BlogStack>
    </Stack>
  )
}

export default BlogSpot