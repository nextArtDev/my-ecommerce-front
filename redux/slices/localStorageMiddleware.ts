// import { Middleware } from 'redux'
// import { addItem, removeAll, removeItem } from './cardSlice'

// const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
//   const result = next(action)

//   if (
//     action.type === addItem.type ||
//     action.type === removeItem.type ||
//     action.type === removeAll.type
//   ) {
//     const state = store.getState()
//     // console.log(state)
//     const cartItems = state.cardReducer
//     // console.log(cartItems)
//     localStorage.setItem('cart-storage', JSON.stringify(cartItems))
//   }

//   return result
// }

// export default localStorageMiddleware
