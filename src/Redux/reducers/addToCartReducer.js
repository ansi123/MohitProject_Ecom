export const addToCartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return state = [...state,action.payload]

      case 'DELETE_FROM_CART':
        return state=state.filter((item,i)=>
        i!=action.payload
        )
        

        

      default: return state
  }
}
