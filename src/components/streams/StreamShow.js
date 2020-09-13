import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {fetchStream} from '../../actions'

const StreamShow = (props) => {

    useEffect(() => {
        props.fetchStream(props.match.params.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const renderStream = (stream) => {
        if (!stream) {
            return <div>Loading ...</div>
        }

        return (
            <div>
                <h1>{stream.title}</h1>
                <h5>{stream.description}</h5>
            </div>
        )
    }

    return (
        <div className='ui container'>{renderStream(props.stream)}</div>
    )
}

const mapStateToProps = ({stream}, ownProps) => {
    return {stream : stream[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream})(StreamShow);