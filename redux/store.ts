import { configureStore } from '@reduxjs/toolkit'
import { cardReducer } from './slices/cardSlice'
import { modalReducer } from './slices/modalSlice'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import localStorageMiddleware from './slices/localStorageMiddleware'
// import ratingsReducer from './slices/ratingsSlice'
export const store = configureStore({
  reducer: {
    cardReducer,
    modalReducer,
    // ratings: ratingsReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    localStorageMiddleware,
  ],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//modifying useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
