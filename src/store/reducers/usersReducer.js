import {
    REGISTER_USER
} from "../actions/usersActions";

const initialState = {
    items: [
        {
            username: 'amir',
            email: 'amir@mailinator.com',
            password: '123456',
            phoneNumber: '7894561230',
            address: '123 test',
            city: 'indore',
            state: 'mp',
            zipcode: '462001'
        },
        {
            username: 'user2',
            email: 'user2@mailinator.com',
            password: '123456',
            phoneNumber: '9999999999',
            address: '123 test',
            city: 'Bhopal',
            state: 'mp',
            zipcode: '452001'
        },
    ],
};

export default function usersReducer(state = initialState, action) {

    switch (action.type) {
        case REGISTER_USER:
            
            const items = [...state.items, action.payload.userData]
            return {
                ...state,
                items
            };

        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}