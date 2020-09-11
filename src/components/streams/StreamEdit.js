import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { fetchStream, editStream } from '../../actions'
import StreamForm from './StreamForm'


const StreamEdit = (props) => {

    useEffect(() => {
        props.fetchStream(props.match.params.id);    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const onFromSubmit = (formValues) => {
        props.editStream(props.match.params.id,formValues);
    }


    const renderStream = (stream) => {
        if (!stream) {
            return <div>Loading...</div>
        }
         
        return (
            <div>
                <StreamForm initialValues = {_.pick(props.stream, 'title', 'description')} onSubmit = {onFromSubmit} ></StreamForm>
            </div>
        )
    }

   
    return (
        <div className='ui container'>
            <h3>Edit a Stream</h3>
            {renderStream(props.stream)}
            
        </div>
    )
}

const mapStateToProps = ({stream}, ownProps) => {
    return {stream : stream[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);