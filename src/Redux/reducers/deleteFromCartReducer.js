export const addToCartReducer = (state = [], action) => {
    switch (action.type) {
      case 'DELETE_FROM_CART':
        return state = [...state,action.payload]
  
        default: return state
    }
  }
  