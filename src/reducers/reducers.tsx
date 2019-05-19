import { combineReducers } from 'redux';
import {
    REQUEST_USERS,
    RECEIVE_USERS,
} from "../actions/actions";


function posts (
    state = {
        isFetching: false,
        didInvalidate: false,
        lastUpdated: '',
        auth: {},
    },
    action:any
) {
    switch (action.type) {
        case REQUEST_USERS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case RECEIVE_USERS:
            return Object.assign({}, state,{
                isFetching: false,
                didInvalidate: false,
                auth: action.posts,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}

function postsByUser(state:any = {}, action:any) {
    switch (action.type) {
        case RECEIVE_USERS:
        case REQUEST_USERS:
        return Object.assign({}, state, posts(state, action))
        default:
        return state
    }
}

const rootReducer = combineReducers({
    postsByUser,
})

export default rootReducer