import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface ConnectState {
  siteName: string,
  navbar: Object,
  data: any
}

// Define the initial state using that type
const initialState: ConnectState = {
  siteName: (require("../../utils/constants/constants.json") as any).siteName,
  navbar: (require("../../utils/constants/constants.json") as any).navbar,
  data: (require("../../utils/constants/constants.json") as any)
}

export const connectSlice = createSlice({
  name: 'connect',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      
    }
  }
})

export const { incrementByAmount } = connectSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const navbar = (state: RootState) => state.connect.navbar

export default connectSlice.reducer