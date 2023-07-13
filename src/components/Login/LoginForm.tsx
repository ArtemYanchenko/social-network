import React, {FC} from 'react';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Checkbox, Form, Input} from 'antd';
import classes from './Login.module.css';
import {loginTC, LoginValues} from '../../bll/auth-reducer';
import {InjectedFormProps, reduxForm} from 'redux-form';

type LoginFormOwnProp = {
    captcha: string | null
}

const LoginForm:FC<InjectedFormProps<LoginValues, LoginFormOwnProp> & LoginFormOwnProp> = ({handleSubmit,error,captcha}) => {

    const onFinish = (values: LoginValues) => {
        console.log(values)
        loginTC(values)
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



export const LoginWithReduxForm = reduxForm<LoginValues, LoginFormOwnProp>({
    form: 'login'
})(LoginForm)