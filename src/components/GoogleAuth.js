import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import {signIn, signOut} from '../actions'


const GoogleAuth = (props) => {
    const authenticate = useRef('');
      useEffect(() => {
         window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '125898360752-fdv652njaunq0utdmn3v6t0jea14eh53.apps.googleusercontent.com',
                scope : 'email'
            }).then(() => {
                authenticate.current = window.gapi.auth2.getAuthInstance();
                onAuthChange(authenticate.current.isSignedIn.get());
                authenticate.current.isSignedIn.listen(onAuthChange)
            })
        });
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])
    
    const onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            props.signIn(authenticate.current.currentUser.get().getId());
        }
        else {
            props.signOut();
        }
        
    }
    
    const renderAuthButton = () => {
        if (props.auth===null) {
            return null;
        }
        else if (props.auth) {
            return (
                <button onClick={()=>authenticate.current.signOut()} className='ui red google button'>
                    <i className='google icon' />
                    Sign Out
                </button>
            )
        }
        else {
            return (
                <button onClick={()=>authenticate.current.signIn()} className='ui green google button'>
                    <i className='google icon' />
                    Sign in with GOOGLE

                </button>
            )
        }
        
    }
    
    return (
        <div style = {{paddingTop : '13px'}}>{renderAuthButton()}</div>
    )
}

const mapStateToProps = ({auth}) => {
    return { auth : auth.isSignedIn };
}

export default connect(mapStateToProps, {signIn, signOut} )(GoogleAuth);