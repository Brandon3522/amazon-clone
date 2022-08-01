
export const initialState = {
    basket: [],
    // user: null,
}

// selector
// gets the total price of the basket using reduce() method
export const getBasketTotal = (basket) => {
    // maps through the basket
    // add price to amount for each item
    // amount = initial amount
    return basket?.reduce((amount, item) => item.price + amount, 0); // return value
}
    

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            }

        default:
            return state
    }
}

export default reducer