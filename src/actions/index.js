import streamDB from '../api/streamDB'
import history from '../history'
//import { formValues } from 'redux-form'

export const signIn = (userId) => {
    return {
        type: 'SIGN_IN',
        payload : userId
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'       
    }
}

export const streamCreate = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streamDB.post('/streams', {...formValues, userId});
    dispatch({
        type: 'CREATE_STREAM',
        payload : response.data
    })

    history.push('/')

}

export const fetchStreams = () => async dispatch => {
    const response = await streamDB.get('/streams');
    dispatch({
        type: 'FETCH_STREAMS',
        payload : response.data
    })
}

export const fetchStream = id => async dispatch => {
    const response = await streamDB.get(`/streams/${id}`);
    dispatch({
        type: 'FETCH_STREAM',
        payload : response.data
    })
}

export const deleteStream = id => async dispatch => {
    await streamDB.delete(`/streams/${id}`);
    dispatch({
        type: 'DELETE_STREAM',
        payload: id
    })

    history.push('/') 
}

export const editStream = (id, formValues) => async (dispatch) => {
    
    const response = await streamDB.patch(`/streams/${id}`, {...formValues});
    dispatch({
        type: 'EDIT_STREAM',
        payload : response.data
    })

    history.push('/')
}
