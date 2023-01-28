import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { BlogCard } from '../Styles/commonStyles';
import { useNavigate } from 'react-router-dom';

export default function ActionAreaCard(props) {
    const navigate = useNavigate();
  return (
    <BlogCard onClick={() => navigate(`view/${props.curElem._id}`)}>
      <CardActionArea>
      
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.curElem.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {props.curElem.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </BlogCard>
  );
}
