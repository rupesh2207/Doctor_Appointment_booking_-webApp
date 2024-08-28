import React from 'react'
import '../styles/Registerstyles.css'
import {Form, Input,message} from 'antd'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'


const Register = () => {

    const navigate = useNavigate();

    // form handler
    const onFinishHandler = async (values) => {
        try {
            const res = await axios.post(
                'http://localhost:8080/api/v1/user/register', 
                values
            )
            if(res.data.success){
                message.success('successfully registered')
                navigate('/login')
            }else{
                message.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            message.error('Something went wrong')
        }
    }
  return (
    <>
        <div className='form-container'>
            <Form layout = "vertical" onFinish={onFinishHandler} className='register-form' >
                <h3 className='text-center'>Registraion Form</h3>
                <Form.Item label="Name" name="name">
                    <Input type = "text" required/>
                </Form.Item>

                <Form.Item label="Email" name="email">
                    <Input type = "email" required/>
                </Form.Item>

                <Form.Item label="Password" name="password">
                    <Input type = "password" required/>
                </Form.Item>

                <Link to="/login" className='m-2'>Login here</Link>

                <button className="btn btn-primary" type="submit">
                    Register
                </button>
            </Form>

        </div>
    </>
  )
}

export default Register