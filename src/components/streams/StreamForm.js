import React from 'react'
import { Field, reduxForm, Form } from 'redux-form';
  
const renderError = ({ error, touched }) => {
     if (touched && error) {
        return (
            <div className='ui error message'>
                <div className='header'>
                    {error}
                </div>    
            </div>
        )
    }
}

const renderInput = ({ input, label, meta }) => {
    
    return (
        <div className='field'>
            <label>{label}</label>
            <input {...input} autoComplete='off' />
            <div style={{color:'red'}} >{renderError(meta)}</div>
        </div>
    )
}
 
const StreamForm = (props) => {
    const onFormSubmit = (formValues) => {
         
        // if (formValues.title.toLowerCase() !== formValues.title) {
        //     throw new SubmissionError({
        //         title: 'Remove capital lettes from Title',
        //         _error : 'Submission failed ! '
        //     })
        // }
        // if (formValues.description.toLowerCase() !== formValues.description) {
        //     throw new SubmissionError({
        //         description: 'Remove capital lettes from Description',
        //         _error : 'Submission failed ! '
        //     })
        // }
        props.onSubmit(formValues);
        
    }
    return (
        
        <Form onSubmit = {props.handleSubmit(onFormSubmit)} className='ui form container error'>
            <Field name='title' component={renderInput} label = "Enter Title" />
            <Field name='description' component={renderInput} label='Enter Description' />
            <br/>
            <button disabled={props.pristine || props.submitting} className='ui button primary'>Submit</button>
        </Form>
    )
}

const validate = (formValues) => {
    const errors = {}
    if (!formValues.title) {
        errors.title = '* You must enter a title'
    }
    if (!formValues.description) {
        errors.description = '* You must enter a description'
    }
    return errors;
}

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);

 