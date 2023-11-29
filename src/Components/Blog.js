import React from 'react';
import { Grid, Typography } from '@mui/material';
import Social from '../Assets/img/social1.jpg';
import { Link } from 'react-router-dom';



function Blog() {
    
  return (
    <div>
        <Grid container spacing={2}>
          <Grid className='blogfirst_banner' item xs={12} >
            <h2 className='blog_header'>Fox News’s New Fight Club: The DeSantis vs. Newsom Debate</h2>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <img className='blog__img' style={{width:"90%",boxShadow:'0 0px 4px 0 rgba(0,0,0,0.2)'}} src={Social} alt='banner image'/>
                <h2 className='blog_title'>Fox News’s New Fight Club: The DeSantis vs. Newsom Debate</h2>
                
            </Grid>
            <Grid item xs={3}  style={{marginTop:'70px',boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)',padding:'20px',marginLeft:"50px",height:'400px',textAlign:'left' }}>
                <h2 className='blog_news'>Least News</h2>
                <Link  to={'/blog/2' } style={{textDecoration: 'none',color:"#063769",backgroundColor:'#4975a18c',padding:'10px',borderRadius:'2Px',float:'left',marginBottom:'10px'}}><b>Musk Visits Amid Criticism Over Content</b></Link>
                <Link  to={'/blog/3' } style={{textDecoration: 'none',color:"#063769",backgroundColor:'#4975a18c',padding:'10px',borderRadius:'2Px',float:'left',marginBottom:'10px'}}><b>Belichick on Verge of Becoming NFL's Biggest Loser</b></Link>
                <Link  to={ '/blog/4'} style={{textDecoration: 'none',color:"#063769",backgroundColor:'#4975a18c',padding:'10px',borderRadius:'2Px',float:'left',marginBottom:'10px'}}><b>Putin Has Staked Resources on Victory in Ukraine. Can West Match Him?</b></Link>

            </Grid>
            
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={8}>
                <Typography variant="subtitle2" style={{textAlign:"left",paddingLeft:'50px',fontSize:'16px'}} gutterBottom>
                            Description: Event moderated by Sean Hannity on Thursday will feature two governors who aren’t rivals for office but have long sparred
                    </Typography>
                    <Typography variant="subtitle2" style={{textAlign:"left",paddingLeft:'50px',fontSize:'16px',marginBottom:'50px'}} gutterBottom>
                    They arent running against each other. Still, \r\nRon DeSantis and Gavin Newsom will take their fiery feud to Fox News this week in a debate moderated by Sean Hannity, offering up a head-to-head that s… [+413 chars]
                    </Typography>
                    <Typography variant="subtitle2" style={{textAlign:"right",paddingLeft:'50px',fontSize:'16px',marginBottom:'50px'}} gutterBottom>
                        <Link target="_blank" to={"https://www.wsj.com/business/media/fox-newss-new-fight-club-desantis-vs-newsom-debate-802369ff" } style={{textDecoration: 'none',color:"#063769"}}>Full Tutorial</Link>
                </Typography>
            </Grid>
            <Grid item xs={3}  style={{boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)',padding:'20px',marginLeft:"50px",height:'350px',textAlign:'left' }}>
                <h2 className='blog_news'>Favorite News</h2>
                <Link  to={'/blog/3' } style={{textDecoration: 'none',color:"#063769",backgroundColor:'#4975a18c',padding:'10px',borderRadius:'2Px',float:'left',marginBottom:'10px'}}><b>Belichick on Verge of Becoming NFL's Biggest Loser</b></Link>
                <Link  to={'/blog/2' } style={{textDecoration: 'none',color:"#063769",backgroundColor:'#4975a18c',padding:'10px',borderRadius:'2Px',float:'left',marginBottom:'10px'}}><b>Musk Visits Amid Criticism Over Content</b></Link>
                <Link  to={'/blog/4' } style={{textDecoration: 'none',color:"#063769",backgroundColor:'#4975a18c',padding:'10px',borderRadius:'2Px',float:'left',marginBottom:'10px'}}><b>Putin Has Staked Resources on Victory in Ukraine. Can West Match Him?</b></Link>

            </Grid>
            <Grid  item xs={12} style={{padding:'30px'}}>
                    
            </Grid>

          </Grid>
    </div>
  );
}

export default Blog;

