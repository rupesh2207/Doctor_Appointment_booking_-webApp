import React from 'react'
import '../styles/Loginstyles.css'
import {Form, Input, message} from 'antd'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();
   // form handler
   const onFinishHandler = async(values) => {
    try {
        const res = await axios.post("/api/v1/user/login",values);
        if(res.data.success){
            localStorage.setItem('token',res.data.token);
            message.success("Login successfull");
            navigate('/');
        }else{
            message.error(res.data.message);
        }
    } catch (error) {
        console.log(error);
        message.error("something went wrong");
    }
    
    }
  return (
    <>
        <div className='form-container'>
            <Form layout = "vertical" onFinish={onFinishHandler} className='login-form' >
                <h3 className='text-center'>Login Form</h3>

                <Form.Item label="Email" name="email">
                    <Input type = "email" required/>
                </Form.Item>

                <Form.Item label="Password" name="password">
                    <Input type = "password" required/>
                </Form.Item>

                <Link to="/register" className='m-2'>Register here</Link>

                <button className="btn btn-primary" type="submit">Login</button>
            </Form>

        </div>
    </>
  )
}

export default Login