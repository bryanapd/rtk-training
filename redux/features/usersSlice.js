import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState= [
  { id: '0', name: 'Ainz' },
  { id: '1', name: 'Albedo' },
  { id: '2', name: 'Shalltear'}
]

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer