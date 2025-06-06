import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const onClickEvent=()=>{
    
        window.location.href = "";
      };
      

export default function Detail({name,content}) {
    return (
        <Card sx={{ maxWidth: 345 }} >
            <CardMedia
                sx={{ height: 140 }}
                image="/AeroPlane.jpg"
                title="green iguana"
            />
            <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={onClickEvent}>More Detail</Button>
                
            </CardActions>
        </Card>
    )
}