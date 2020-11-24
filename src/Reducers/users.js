import {act} from "react-dom/test-utils";

const fetchUsers = (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL_USERS':
            return [...state, action.users]

        default: return state
    }
} 

export { fetchUsers }