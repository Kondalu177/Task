import React from 'react';
import { Grid, Typography } from '@mui/material';
import Social from '../Assets/img/social 2.jpg';
import { Link } from 'react-router-dom';

function Blogthird() {
  return (
    <div>
        <Grid container spacing={2}>
          <Grid className='blogfirst_banner' item xs={12} >
            <h2 className='blog_header'>Amazon Clinches Deal With Spanish Union Over Cyber Monday Walkout</h2>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <img className='blog__img' style={{width:"90%",boxShadow:'0 0px 4px 0 rgba(0,0,0,0.2)'}} src={Social} alt='banner image'/>
                <h2 className='blog_title'>Amazon Clinches Deal With Spanish Union Over Cyber Monday Walkout</h2>
                
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
                            Description: Amazon Clinches Deal With Spanish Union Over Cyber Monday Walkoutwsj.com
                    </Typography>
                    <Typography variant="subtitle2" style={{textAlign:"left",paddingLeft:'50px',fontSize:'16px',marginBottom:'50px'}} gutterBottom>
                    Amazon.com reached an agreement with most of its workers in Spain, averting the full impact of a strike that risked crippling its warehouses on one of the busiest days of the year.\r\nAn Amazon spokesp… [+504 chars]
                    </Typography>
                    <Typography variant="subtitle2" style={{textAlign:"right",paddingLeft:'50px',fontSize:'16px',marginBottom:'50px'}} gutterBottom>
                        <Link target="_blank" to={"https://www.wsj.com/world/europe/amazon-clinches-deal-with-spanish-union-over-cyber-monday-walkout-a4f931e0" } style={{textDecoration: 'none',color:"#063769"}}>Full Tutorial</Link>
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

export default Blogthird;
