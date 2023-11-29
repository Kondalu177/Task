import React from 'react';
import { Grid, Typography } from '@mui/material';
import Mask from '../Assets/img/mask.jpg';
import { Link } from 'react-router-dom';

function Blogfrist() {
  return (
    <div>
      <Grid container spacing={2}>
          <Grid className='blogfirst_banner' item xs={12} >
            <h2 className='blog_header'>Musk Visits Amid Criticism Over Content</h2>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <img className='blog__img' style={{width:"90%",boxShadow:'0 0px 4px 0 rgba(0,0,0,0.2)'}} src={Mask} alt='banner image'/>
                <h2 className='blog_title'>Musk Visits Amid Criticism Over Content</h2>
                
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
                            Description: Billionaire visits kibbutz attacked last month is scheduled to meet with Israeli president
                    </Typography>
                    <Typography variant="subtitle2" style={{textAlign:"left",paddingLeft:'50px',fontSize:'16px',marginBottom:'50px'}} gutterBottom>
                        Elon Musk Visits Israel Amid Criticism Over Antisemitic Content on XBy Nov. 27, 2023 7:22 am ET\r\nElon Musk visited an Israeli community attacked by Hamas last month, and was scheduled to meet the
                    </Typography>
                    <Typography variant="subtitle2" style={{textAlign:"right",paddingLeft:'50px',fontSize:'16px',marginBottom:'50px'}} gutterBottom>
                        <Link target="_blank" to={'https://www.wsj.com/world/middle-east/elon-musk-visits-israel-amid-criticism-over-antisemitic-content-on-x-436e7d40' } style={{textDecoration: 'none',color:"#063769"}}>Full Tutorial</Link>
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

export default Blogfrist;
