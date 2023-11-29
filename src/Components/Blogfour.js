import React from 'react';
import { Grid, Typography } from '@mui/material';
import Social from '../Assets/img/social-4.jpg';
import { Link } from 'react-router-dom';

function Blogfour() {
  return (
    <div>
      <Grid container spacing={2}>
          <Grid className='blogfirst_banner' item xs={12} >
            <h2 className='blog_header'>Putin Has Staked Resources on Victory in Ukraine. Can West Match Him?</h2>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <img className='blog__img' style={{width:"90%",boxShadow:'0 0px 4px 0 rgba(0,0,0,0.2)'}} src={Social} alt='banner image'/>
                <h2 className='blog_title'>Putin Has Staked Resources on Victory in Ukraine. Can West Match Him?</h2>
                
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
                            Description: Kremlin leader seeks to turn advantage in manpower and munitions into battlefield progress, while Western will and assistance for Kyiv waver
                    </Typography>
                    <Typography variant="subtitle2" style={{textAlign:"left",paddingLeft:'50px',fontSize:'16px',marginBottom:'50px'}} gutterBottom>
                    Putin Has Staked Russia’s Resources on Victory in Ukraine. Can the West Match Him?  KYIV, Ukraine—As Russia’s war against Ukraine approaches its third year, Moscow holds the advantage on the military… [+1107 chars]
                    </Typography>
                    <Typography variant="subtitle2" style={{textAlign:"right",paddingLeft:'50px',fontSize:'16px',marginBottom:'50px'}} gutterBottom>
                        <Link target="_blank" to={ "https://www.wsj.com/world/putin-has-staked-russias-resources-on-victory-in-ukraine-can-the-west-match-him-b5d7b5f2" } style={{textDecoration: 'none',color:"#063769"}}>Full Tutorial</Link>
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

export default Blogfour;
