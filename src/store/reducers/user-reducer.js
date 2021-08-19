import { Action } from '../actions'

/* 
    "address": [],
    "wishlist": [],
    "orders": [],
    "_id": "611e0acab81af50c9ea7a4b1",
    "email": "test4@test.com",
    "phone": "12345",
    "cart": [],
    "createdAt": "2021-08-19T07:39:54.096Z",
    "updatedAt": "2021-08-19T07:39:54.096Z"
 */

const initialState = {
    user: {}, // {id: // token: //}
    profile: {} //
}

export const UserReducer  = (state = initialState, action) => {

    switch(action.type){
        case Action.SIGNUP:
        case Action.LOGIN:
            return {
                ...state, 
                user: action.payload
            };
        case Action.PROFILE:
            return {
                ...state, 
                profile: action.payload
            };

        default: 
            return state;


    }

}
