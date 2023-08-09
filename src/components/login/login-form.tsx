import React from 'react';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {required} from '../../utils/validator';
import classes from './login.module.css'
import {CheckboxWrapper, createField, Input} from '../common/forms-controls/forms-controls';
import {CustomButton} from '../common/custom-button/custom-button';

const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginFormOwnProps> & LoginFormOwnProps> = ({
                                                                                                         handleSubmit,
                                                                                                         error,
                                                                                                         captcha
                                                                                                     }) => {
    return (
        <form onSubmit={handleSubmit} className={classes.formControl}>
            <div className={classes.formLabel}>
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
            </div>
            <div className={classes.email}>
                {createField<LoginFormKeyValuesType>('Email', 'email', [required], Input)}
            </div>
            <div className={classes.password}>
                {createField<LoginFormKeyValuesType>('Password', 'password', [required], Input, {type: 'password'})}
            </div>
            <div className={classes.rememberMe}>
                {createField<LoginFormKeyValuesType>('', 'rememberMe', [], CheckboxWrapper, {type: 'checkbox'}, 'remember me')}
            </div>
            {captcha && <img className={classes.captcha} src={captcha} alt={'captcha'}/>}
            {captcha && createField<LoginFormKeyValuesType>('Symbols from image', 'captcha', [required], Input)}
            {error && <div className={classes.formSummaryError}>{error}</div>}
            <CustomButton name="Login"/>
        </form>
    );
};
export const LoginWithReduxForm = reduxForm<FormDataType, LoginFormOwnProps>({form: 'login'})(LoginForm)

//types
export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
type LoginFormOwnProps = {
    captcha: string | null
}
type LoginFormKeyValuesType = keyof FormDataType