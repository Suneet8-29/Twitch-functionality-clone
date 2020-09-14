import React, { useEffect, createRef } from 'react'
import { connect } from 'react-redux'
import {fetchStream} from '../../actions'
import flv from 'flv.js'
const StreamShow = (props) => {

    const videoRef = createRef();
    var flvPlayer;
    useEffect(() => {
        props.fetchStream(props.match.params.id)
        buildPlayer();

        return () => {
            flvPlayer.destroy();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
         buildPlayer();
     // eslint-disable-next-line react-hooks/exhaustive-deps
     })

    const buildPlayer = () => {
        if (flvPlayer || !props.stream) {
            return;
        }
        flvPlayer = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/${props.match.params.id}.flv`
        });
        flvPlayer.attachMediaElement(videoRef.current);
        flvPlayer.load();
        //flvPlayer.play();
    }

    const renderStream = (stream) => {
        if (!stream) {
            return <div>Loading ...</div>
        }

        return (
            <div>
                <video ref = {videoRef} style = {{width : '100%'}} controls ></video>
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