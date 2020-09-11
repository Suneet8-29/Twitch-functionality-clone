import _ from 'lodash'
// export const fetchStream = (state = {}, action) => {
//     if (action.type === 'FETCH_STREAM') {
//         return {...state, [action.payload.id] : action.payload};
//     }
// }

// export const editStream = (state = {}, action) => {
//     if (action.type === 'EDIT_STREAM') {
//         return {...state, [action.payload.id] : action.payload}
//     }
//     return state;
// }

// export const createStream = (state = {}, action) => {
//     if (action.type === 'CREATE_STREAM') {
//         return {...state, [action.payload.id] : action.payload}
//     }
// } 

export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_STREAMS':
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        
        case 'FETCH_STREAM':
            return { ...state, [action.payload.id]: action.payload };
        
        case 'EDIT_STREAM':
            return { ...state, [action.payload.id]: action.payload };
        
        case 'CREATE_STREAM':
            return { ...state, [action.payload.id]: action.payload };
        
        case 'DELETE_STREAM':
            return _.omit(state, action.payload);
        
        default:
            return state;    
    }
}



