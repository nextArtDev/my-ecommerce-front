import { toast } from '@/components/ui/use-toast'
import { Product } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
type InitialState = {
  items: Product[]
}
const initialState: InitialState = { items: [] }

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      // const currentItems = state.items
      // const existingItem = currentItems.find(
      //   (item) => item.id === action.payload.id
      // )
      //  if (existingItem) {
      //    return toast({title:'آیتم قبلا به کارت اضافه شده'})
      //   }
      // state.items = [...state.items, action.payload]
      state.items?.push(action?.payload)
      toast({ title: 'آیتم به کارت اضافه شد' })
    },
    removeItem: (state, action: PayloadAction<Product>) => {
      ;(state.items = state.items?.filter(
        (item) => item.id !== action.payload.id
      )),
        toast({ title: 'آیتم از کارت حذف شد' })
    },
    removeAll: (state) => {
      state.items = []
    },
  },
})

export const { addItem, removeItem, removeAll } = cardSlice.actions
export const cardReducer = cardSlice.reducer

// import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// type CounterState = {
//   value: number
// }

// const initialState = {
//   value: 0,
// } as CounterState

// export const counter = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     reset: () => initialState,
//     increment: (state) => {
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action: PayloadAction<number>) => {
//       state.value += action.payload
//     },
//     decrementByAmount: (state, action: PayloadAction<number>) => {
//       state.value -= action.payload
//     },
//   },
// })

// export const {
//   increment,
//   incrementByAmount,
//   decrement,
//   decrementByAmount,
//   reset,
// } = counter.actions
// export default counter.reducer
