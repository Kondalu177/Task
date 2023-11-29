// import files and packages
import React, { useEffect, useState } from 'react';
import { Grid, InputLabel, Input, FormControl, Button,FormControlLabel,Checkbox } from '@mui/material';
import Peakpx from '../Assets/img/peakpx.jpg';
import { Link, useNavigate } from 'react-router-dom';



function Login() {
    // useState fuctions
    const [Form, setForm] = useState({
        email: '',
        password : ''
    })
    const [error, setError] = useState({})
    const [submiting, setsubmiting] = useState(false)
    // navietions file
    const navigete = useNavigate()

    // form Handlers in onchange function
    const Handler = e =>{
        const formstate = {
            ...Form,
            [e.target.name] : e.target.value,
        };
        setForm(formstate)
    }
    // onSubmit funtion
    const onSubmitForm = e =>{
        e.preventDefault();
        setError(validation(Form))
        setsubmiting(true)
       
    }
    // uesEffect function 
    useEffect(()=>{
        console.log(error)
        if(Object.keys(error).length === 0 && submiting){
        
        }
    },[Form])

    // form validations
    const validation =(value)=>{
        const error = {};
        const redex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g 
        if(!value.email){
            error.email = "Email is required";
            
        }else if(!redex.test(value.email)){
            error.email = "Invaild email format";
            
        }
        else if(!value.password){
            error.password = "Password is required";
            
        }else{
            navigete('/dashboard')
        }
        return error;
    }
    
  return (
    <div>
        {/* form jsx code */}
        <Grid className='grid_box' container spacing={2} style={{width:'80%',marginLeft:'auto',marginRight:'auto',marginTop:"100px"}}>
            <Grid xs={7}>
                <img style={{width:'100%'}} src={Peakpx} alt='login_img'/>
            </Grid>
            <Grid xs={5}>
                <h1>Login</h1>
                <form onSubmit={onSubmitForm}>
                
                <Grid xs={12}>
                    <FormControl className='from_fileds'>
                        <InputLabel htmlFor="my-input">Email address</InputLabel>
                        <Input type='email' name='email' value={Form.email} onChange={Handler} id="my-input" aria-describedby="my-helper-text" />
                        
                    </FormControl>
                    <p style={{color:'red',textAlign:'left',paddingLeft:'50px'}}>{error.email}</p>
                </Grid>
                <Grid xs={12}>
                    <FormControl className='from_fileds'>
                        <InputLabel htmlFor="my-input">Password</InputLabel>
                        <Input type='password' name='password' value={Form.password} onChange={Handler} id="my-input" aria-describedby="my-helper-text" />
                        
                    </FormControl>
                    <p style={{color:'red',textAlign:'left',paddingLeft:'50px'}}>{error.password}</p>
                </Grid>
                <Grid container spacing={2}>
                    <Grid xs={12} style={{textAlign:'left'}}>
                        <FormControlLabel style={{marginLeft:'50px'}} required control={<Checkbox />} label="Remember Me" />   
                    </Grid>
                    {/* <Grid xs={6} style={{marginTop:'7px'}}>
                        <Link style={{color:'#063769',textDecoration: 'none'}}>Forget Password</Link>  
                    </Grid> */}
                    
                </Grid>
                
                <Button type='submit' style={{backgroundColor:"#063769",width:'80%',marginTop:"30px"}} variant="contained" >Login</Button>
                    <Grid style={{marginTop:'10px'}}>
                    Don't have an account yet?<Link to={'/register'} style={{textDecoration: 'none',color:"#063769"}}>Sign Up</Link>    
                    </Grid>
                    
                </form>
            </Grid>
            
        </Grid>
    </div>
  );
}

export default Login;
