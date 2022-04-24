import React from 'react'
import { useFormik } from 'formik'
import './Reg.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Reg() {

    const navigate = useNavigate();
    const validateForm = (formValue) => {
        let errors = {};

        let vaildateEmail = /^([a-z0-9._]+)@([a-z]{5,12}).([a-z.]{2,20})$/
        let validatePwd = /^(?=.*[a-zA-Z0-9])(?=.*[!@#%&*]).{4,15}$/
        if (!formValue.username) {
            errors.username = "enter username"
        } else if (formValue.username.length < 3) {
            errors.username = "minimum 3 character required"
        }

        if (!formValue.email) {
            errors.email = "enter email"
        } else if (!vaildateEmail.test(formValue.email)) {
            errors.email = "Invaild email pattern"
        }
        if (!formValue.password) {
            errors.password = "enter password"
        } else if (!validatePwd.test(formValue.password)) {
            errors.password = "Wrong password"
        }
        console.log("Errors are : ", errors);
        return errors;
    }
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        validate: validateForm,
        onSubmit: (values) => {
            console.log("Received values : ", values);
            axios.post('https://node-project-storage.herokuapp.com/postUserData', values)
                .then(res => {
                    console.log("received axios Response: ", res);
                    alert(res.data.message)
                    navigate('/login')
                })
                .catch(err => {
                    console.log("Axios error: ", err);
                })
        }
    })
    return (
        <div  className='form-section-1'>
            <h1>Register Here: </h1>
            <div>
                <form onSubmit={formik.handleSubmit} className='reg-form'>
                    <input className='login-box' type="text"
                        name="username"
                        placeholder='Username'
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    /><br />
                    {formik.touched.username && formik.errors.username ? (<span>{formik.errors.username}</span>) : null}
                    <br /><br />
                    <input className='login-box' type="text"
                        name="email"
                        placeholder='enter email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    /><br />
                    {formik.touched.email && formik.errors.email ? (<span>{formik.errors.email}</span>) : null}
                    <br /><br />
                    <input className='login-box' type='text'
                        name="password"
                        placeholder='valid password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    /><br />
                    {formik.touched.password && formik.errors.password ? (<span>{formik.errors.password}</span>) : null}
                    <br /><br />
                    <button type="submit" value="Submit Now" className='btn-reg' disabled={!(formik.isValid && formik.dirty)}> Submit Now </button>

                </form>
            </div>
        </div>
    )
}
