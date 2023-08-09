import React from 'react';
import classes from './forms-controls.module.css'
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from 'redux-form';
import {FieldValidatorType} from '../../../utils/validator';
import {Checkbox} from 'antd';

type PropsType = {
    meta: WrappedFieldMetaProps
};

export const FormControl: React.FC<PropsType> = (props) => {
    const {meta: {touched, error}, children} = props
    const hasError = touched && error;
    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : '')} {...props}>
            <div>{children}</div>
            {hasError && <span>{error}</span>}
        </div>
    );
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} className={classes.customInput} />
        </FormControl>
    );
};

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    );
};
export const CheckboxWrapper: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <Checkbox {...input} {...restProps} />
        </FormControl>
    );
};

export function createField<T extends string>(placeholder: string,
                                              name: T,
                                              validators: FieldValidatorType[],
                                              component: React.FC<WrappedFieldProps>,
                                              props?: { type: string },
                                              text: string = '') {
    return (
        <div style={{display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center'}}>
            <Field placeholder={placeholder}
                   className={classes.formControl}
                   name={name}
                   component={component}
                   validate={validators}
                   {...props}/>
            {text}
        </div>
    )
}