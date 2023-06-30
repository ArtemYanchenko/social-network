import React from 'react';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Checkbox, Form, Input} from 'antd';
import classes from './Login.module.css';
import {LoginPropsType} from './LoginContainer';
import {LoginValues} from '../../bll/auth-reducer';

const Login = (props:LoginPropsType) => {

    const onFinish = (values: LoginValues) => {
       props.login(values)
        console.log(values)
        // dispatch(loginTC(values))
    };

    return (
        <div className={classes.loginWrapper}>
            <Form
                className={classes.loginForm}
                initialValues={{rememberMe: true}}
                onFinish={onFinish}
            >
                <Form.Item
                    name="email"
                    rules={[{required: true, message: 'Please input your Username!'}]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" rev={undefined}/>}
                           placeholder="Username"/>
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{required: true, message: 'Please input your Password!'}]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" rev={undefined}/>}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="rememberMe" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className={classes.loginFormButton}>
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;