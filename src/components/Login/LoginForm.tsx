import React from 'react';
import {InjectedFormProps, reduxForm} from 'redux-form';
import classes from './forms-controls.module.css';
import {required} from '../../utils/validator';
import {CheckboxWrapper, createField, Input} from './forms-controls';
import {Form} from 'antd';

const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginFormOwnProps> & LoginFormOwnProps> = ({
                                                                                                         handleSubmit,
                                                                                                         error,
                                                                                                         captcha
                                                                                                     }) => {
    return (
        <form onSubmit={handleSubmit} className={classes.formControl}>
            <Form.Item className={classes.formLabel}>
                <p>
                    To log in get registered <a href={'https://social-network.samuraijs.com/'}
                                                target={'_blank'} rel="noreferrer">here</a>
                </p>
                <p>
                    or use common test account credentials:
                </p>
                <p> Email: free@samuraijs.com
                </p>
                <p>
                    Password: free
                </p>
            </Form.Item>
            <div className={classes.email}>
                {createField<LoginFormKeyValuesType>('Email', 'email', [required], Input)}
            </div>
            <div className={classes.password}>
                {createField<LoginFormKeyValuesType>('Password', 'password', [required], Input, {type: 'password'})}
            </div>
            <div className={classes.rememberMy}>
                {createField<LoginFormKeyValuesType>('', 'rememberMy', [], CheckboxWrapper, {type: 'checkbox'}, 'remember my')}
            </div>
            {captcha && <img className={classes.captcha} src={captcha} alt={'captcha'}/>}
            {captcha && createField<LoginFormKeyValuesType>('Symbols from image', 'captcha', [required], Input)}
            {error && <div className={classes.formSummaryError}>{error}</div>}
            <button className={classes.btn}>Login</button>
        </form>
    );
};
export const LoginWithReduxForm = reduxForm<FormDataType, LoginFormOwnProps>({form: 'login'})(LoginForm)

//types
export type FormDataType = {
    email: string
    password: string
    rememberMy: boolean
    captcha: string
}
type LoginFormOwnProps = {
    captcha: string | null
}
type LoginFormKeyValuesType = keyof FormDataType