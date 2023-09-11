import { Product } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
type InitialState = {
  isOpen: boolean
  data?: Product
}
const initialState = {
  isOpen: false,
  data: undefined,
} as InitialState
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    onOpen: (state, action: PayloadAction<Product>) => {
      state.isOpen = true
      state.data = action.payload
    },
    onClose: (state) => {
      state.isOpen = false
    },
  },
})

export const { onOpen, onClose } = modalSlice.actions
export const modalReducer = modalSlice.reducer
