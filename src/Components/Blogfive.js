import React from 'react';
import { Grid, Typography } from '@mui/material';
import Social from '../Assets/img/social5.jpg';
import { Link } from 'react-router-dom';

function Blogfive() {
  return (
    <div>
        <Grid container spacing={2}>
          <Grid className='blogfirst_banner' item xs={12} >
            <h2 className='blog_header'>Behind Tesla’s Challenges in Making the Cybertruck: Ultrahard Stainless Steel</h2>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <img className='blog__img' style={{width:"90%",boxShadow:'0 0px 4px 0 rgba(0,0,0,0.2)'}} src={Social} alt='banner image'/>
                <h2 className='blog_title'>Behind Tesla’s Challenges in Making the Cybertruck: Ultrahard Stainless Steel</h2>
                
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
                            Description: The metal used for the pickup truck’s distinctive exterior has been difficult to manipulate
                    </Typography>
                    <Typography variant="subtitle2" style={{textAlign:"left",paddingLeft:'50px',fontSize:'16px',marginBottom:'50px'}} gutterBottom>
                        With the Cybertruck, Tesla sought to break from convention by cladding its electric pickup in ultrahard stainless steel, a material that doesnt need to be painted, resists dents and adds to the vehic… [+256 chars]
                    </Typography>
                    <Typography variant="subtitle2" style={{textAlign:"right",paddingLeft:'50px',fontSize:'16px',marginBottom:'50px'}} gutterBottom>
                        <Link target="_blank" to={ "https://www.wsj.com/business/autos/behind-teslas-challenges-in-making-the-cybertruck-ultrahard-stainless-steel-8cb4c1b9" } style={{textDecoration: 'none',color:"#063769"}}>Full Tutorial</Link>
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

export default Blogfive;
