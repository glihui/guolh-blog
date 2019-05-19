export const REQUEST_USERS = 'REQUEST_USERS';
 
export function requestUsers(){
    return {
        type : REQUEST_USERS,
    }
}


export const RECEIVE_USERS = 'RECEIVE_USERS';
export function receiveUsers(json: any) {
    return {
        type: RECEIVE_USERS,
        posts: json,
        receiveAt: Date.now()
    }
}


export function fetchPosts(user:any) {
    return function(dispatch:any) {
        console.log(user)
        dispatch(requestUsers())

        return fetch('/api/authorizations',{
            method:'POST',
            headers: { 
                'Content-Type': 'application/json', 
            },
            body: user,
            mode:"cors"
        })
        .then(
            response => response.json(),
            error => console.log('An error occurred.', error)
        )
        .then(json => 
            dispatch(receiveUsers(json))
        )

    }
}