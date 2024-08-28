import React from 'react'
import '../styles/Loginstyles.css'
import {Form, Input} from 'antd'
import {Link} from 'react-router-dom'

const Login = () => {
   // form handler
   const onFinishHandler = (values) => {
    console.log(values)
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