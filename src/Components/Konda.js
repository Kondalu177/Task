import React, { Component } from 'react';
import { Grid,Card ,CardMedia,CardContent,Typography,CardActions,Button,Switch } from '@mui/material';
import News from '../Assets/img/news.jpg'
import axios from 'axios';
import { DataObject } from '@mui/icons-material';
import { Link } from 'react-router-dom';

class Konda extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           posts:[]
        }
      }
      componentDidMount(){
          axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=765d582e37f84633b7699e6ade016ff8')
          .then(res =>{
              console.log(res)
              this.setState({posts : res.data.articles})
          })
          .catch(error =>{
              console.log(error)
          })
      }
      
    render() {
        const { posts} = this.state
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
        <Switch
            // checked={checked}
            // onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
            />
        <Grid container spacing={3} style={{padding:'20px',marginLeft:'50px'}}>
        
        { 
            posts.length ?
            posts.slice(0,6).map((post, index) => 
            <div key={index}>
                
                    <Grid item xs={12} style={{margin:'30px',textAlign:'left'}}>
                        <Card sx={{ maxWidth: 345 }}>
                        <img style={{width:"100%",boxShadow:'0 0px 4px 0 rgba(0,0,0,0.2)'}} src={News} alt='Blog_image'/>
                        <CardContent>
                        
                            <Typography gutterBottom variant="h5" component="div">
                            {post.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            {post.content}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            
                            <Button size="small"><Link to={'/blog/' + index} style={{textDecoration: 'none',color:"#063769"}}>Learn More</Link></Button>
                        </CardActions>
                        </Card>
                    </Grid>
                    
                

            </div>) :
            null
          }
          </Grid>
        
        </div>
      )
    }
}

export default Konda;
