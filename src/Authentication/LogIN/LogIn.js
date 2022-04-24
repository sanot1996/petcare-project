import React from 'react'
import { useFormik } from 'formik'
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import './LogIn.css'

export default function LogIn() {

    const navigate=useNavigate();
    const validateLogin=(loginValue)=>{
        let errors = {};
        let vaildateEmail=/^([a-z0-9._]+)@([a-z]{5,12}).([a-z.]{2,20})$/
        let validatePwd = /^(?=.*[a-zA-Z0-9])(?=.*[!@#%&*]).{4,15}$/
        if(!loginValue.email)
        {
            errors.email="enter email"
        }else if(!vaildateEmail.test(loginValue.email))
        {
            errors.email="Invalid email"
        }
        if(!loginValue.password)
        {
            errors.password="enter email"
        }else if(!validatePwd.test(loginValue.password))
        {
            errors.password="Wrong password "
        }
        console.log("errors are : ",errors);
        return errors;
    }
    

    const formik=useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validate:validateLogin,
        onSubmit:(values)=>{
            console.log("Received values after submition: ",values);
            axios.post('https://node-project-storage.herokuapp.com/postLoginData',values)
            .then(res=>{
                console.log("axios Response",res);
                
                window.sessionStorage.setItem("TokenValue",res.data.token);
                navigate('/petproduct')
            })
            .catch(err=>{
                console.log("axios error : ",err);
            })
        }
    })
  return (
    
    <div className='main-section'>
        <h1>LogIn Here...</h1>

        <form className='login-form' onSubmit={formik.handleSubmit}>
            <input className="login-box" 
            type='text' 
            name='email' 
            placeholder='enter email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
            <br/>
            {formik.touched.email && formik.errors.email ? 
            (<span className='err'>{formik.errors.email}</span>):null }
            <br/>
            <input className="login-box-2" 
            type="text" name='password' 
            placeholder='password'  
            value={formik.values.password} 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
            <br/>
            {formik.touched.password && formik.errors.password ?
            (<span className='err'>{formik.errors.password}</span>):null}
            <br/>
            <button type="submit" value="submit now" className='btn-login'>SUMBIT</button>
            <button type='submit' value="submit now" className='btn-login-2'><Link to={`/registration`} className='btn-link'>Go Registration</Link></button>
        </form>
    </div>
    
  )
}
