export const initialState = {
    basket: [],
    user: null,
};

// selector
// gets the total price of the basket using reduce() method
export const getBasketTotal = (basket) => {
    // maps through the basket
    // add price to amount for each item
    // amount = initial amount
    return basket?.reduce((amount, item) => item.price + amount, 0); // return value
};

const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            // index of item
            // does any item match id passed in, return first match
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            // copy current basket
            let newBasket = [...state.basket];

            if (index >= 0) {
                // remove 1 at index
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Error! Product (id: ${action.id}) is not in the basket.`
                );
            }

            // current state and new basket
            return {
                ...state,
                basket: newBasket,
            };

        case 'SET_USER':
            return {
                ...state,
                user: action.user // update user
            }

        default:
            return state;
    }
};

export default reducer;
