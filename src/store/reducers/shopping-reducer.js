
import { Action } from '../actions'

const initialState = {
    products: [],
    categories: []
}

export const ShoppingReducer  = (state = initialState, action) => {

    switch(action.type){
        case Action.LANDING_PRODUCTS:

            console.log(action.payload, 'Action Payload');

            return {
                ...state, 
                products: action.payload.products,
                categories: action.payload.categories 
            };
        default: 
            return state;
    }

}
