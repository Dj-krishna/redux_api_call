import {getUserApi} from '../Api/api';

export const getUserAction = (users) => ({
    type: 'GET_ALL_USERS',
    users
})

export const getAllUsers = () => dispatch => {
    getUserApi().then(data => {
        dispatch(getUserAction(data))
    }).catch(err => console.log("Error: ", +err))
}
