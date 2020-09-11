import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'

import {fetchStream, deleteStream} from '../../actions'
import Modal from '../../Modal'
import history from '../../history'


const StreamDelete = (props) => {

    useEffect(() => {
        props.fetchStream(props.match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const actions = (
        <Fragment>
            <button onClick={() => { props.deleteStream(props.match.params.id)} } className='ui button negative'>Delete</button>
            <button onClick={()=>history.push('/')} className='ui button'>Cancel</button>
        </Fragment>
    )

    const renderDescription = () => {
        if (!props.stream) {
            return 'Are you sure you want to delete the stream ?'
        }

        return `Are you sure you want to delete the stream : ${props.stream.title} ?`;
    }    

     return (
        <Fragment>
            <Modal
                title='Delete Stream'
                description={renderDescription()}
                actions={actions}
                onDismiss = {()=>history.push('/')}
            ></Modal>
            <div>Delete</div>
        </Fragment>
    )
}

const mapStateToProps = ({stream}, ownProps) => {
    return {stream : stream[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);