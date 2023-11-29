import React, { useEffect, useState } from 'react';
import { Grid,Card ,CardMedia,CardContent,Typography,CardActions,Button,Switch,Rating  } from '@mui/material';
import News from '../Assets/img/news.jpg'
import axios from 'axios';
import { DataObject } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { styled } from '@mui/material/styles';


function Dash() {
  const url = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=765d582e37f84633b7699e6ade016ff8';
  const [post, setPost] = useState([])
  const [error, setError] = useState('')
  const [checked, setChecked] = useState(true);

  
  

  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });

  useEffect(() =>{
    axios.get(url)
    .then((res) => {
      console.log(res)
      setPost(res.data.articles)
      
    })
    .catch((error)=>{
      
      setError('Somthing went worng')
    })
    
  },[])
  
      
        
      
        
      
  
  return (
    
    <div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <img style={{width:"100%",boxShadow:'0 0px 4px 0 rgba(0,0,0,0.2)'}} src={News} alt='banner image'/>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1 style={{fontSize:'40px',padding:'50px'}}>Least News</h1>
          </Grid>
        </Grid>
        <Grid style={{float:"right", marginRight:'50px'}}>
        <Switch
            style={{alignItems:'right'}}
            onChange={ () => setChecked(!checked)}
            inputProps={{ 'aria-label': 'controlled' }}
            />
        </Grid>
        {checked && (
          <Grid checked={checked} container spacing={3} style={{paddingLeft:'70px',}} id = "newscontent">
          {
          
                post.slice(2,8).map((posts,index) =>
                  <div key={index}>
              
                      <Grid item xs={12} style={{margin:'30px',textAlign:'left'}}>
                          <Card sx={{ maxWidth: 345 }}>
                          <img style={{width:"100%",boxShadow:'0 0px 4px 0 rgba(0,0,0,0.2)'}} src={posts.urlToImage} alt='Blog_image'/>
                          <CardContent>
                            <Grid style={{float:"right", marginRight:'10px'}}>
                            <StyledRating
                                name="customized-color"
                                defaultValue={1}
                                max={1}
                                getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                precision={1}
                                icon={<FavoriteIcon fontSize="inherit"  />}
                                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                              />
                            </Grid>
                          
                              <Typography gutterBottom variant="h5" component="div">
                              {posts.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                              {posts.content}
                              </Typography>
                          </CardContent>
                          <CardActions>
                              
                              <Button size="small"><Link to={'/blog/' + index} style={{textDecoration: 'none',color:"#063769"}}>Learn More</Link></Button>
                          </CardActions>
                          </Card>
                      </Grid>
                  
              

                  </div>
                )
            
          }
      </Grid>
        )}
      
    </div>
  );
}

export default Dash;

