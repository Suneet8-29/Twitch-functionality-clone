import React from 'react'
 import { connect } from 'react-redux'
import { streamCreate } from '../../actions'

 import StreamForm from './StreamForm'

 
const StreamCreate = (props) => {
    const onFormSubmit = (formValues) => {
          
        props.streamCreate(formValues);
        
    }
    return (
        <div className='ui container'>
            <h3>Create a Stream</h3>
            <StreamForm onSubmit={onFormSubmit} ></StreamForm>

        </div>
    )
}
 
export default connect(null, {streamCreate})(StreamCreate)