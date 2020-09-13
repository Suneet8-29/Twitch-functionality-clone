import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchStreams } from '../../actions'
import {Link} from 'react-router-dom'


const StreamList = (props) => {
    useEffect(() => {
        props.fetchStreams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const renderAdmin = (stream) => {
        if (stream.userId === props.currentUserId && stream.userId != null) {
            return (
                <div className='right floated content'>
                    <Link to={`/streams/edit/${stream.id}`} className='button ui primary' >EDIT</Link>
                    <Link to={`/streams/delete/${stream.id}`} className='button ui negative' >DELETE</Link>
                </div>
            )
        }
    }
    
    const renderList = ()=>{
        return props.streams.map((stream) => {
            return (
                
                <div className='item' key={stream.id}>
                    {renderAdmin(stream)}
                    <i className='large middle aligned icon camera' />
                    <div className='content'>
                    <Link to={`/streams/${stream.id}`} >
                            {stream.title}
                            </Link>
                        <div className='description'>
                            {stream.description}
                        </div>
                    </div>
                </div>
                
            )
        })
    }

    const renderCreate = () => {
        if (props.isSignedIn) {
            return (
                <Link to='/streams/new' className='ui button green'>CREATE STREAM</Link>
            )
            
        }
        
    }

    return (
        <div className='ui container'>
            <h2>Streams</h2>
            <div className='ui celled list'>{renderList()}</div>
            <div style={{ textAlign: 'right' }}>{renderCreate()}</div>
            <br/>
        </div>
    )
}

const mapStateToProps = ({stream, auth}) => {
    return {
        streams: Object.values(stream),
        currentUserId: auth.userId,
        isSignedIn : auth.isSignedIn
    };
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);