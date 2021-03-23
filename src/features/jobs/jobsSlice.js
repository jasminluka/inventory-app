 import { createSlice } from '@reduxjs/toolkit'
 import { v4 as uuidv4 } from 'uuid'

const jobsInitialState = [
  {
    id: uuidv4(),
    name: '589 3rd Avenue, New York. Ny',
    categories: ['Shed'],
    isConfirmed: false
  },
  {
    id: uuidv4(),
    name: '666 Greenwich, Street, New York, NY',
    categories: ['Shed', 'Scaffold'],
    isConfirmed: true
  },
  {
    id: uuidv4(),
    name: '216 Fort Washington Avenue, New York, NY',
    categories: ['Shed', 'Shoring'],
    isConfirmed: false
  }
]

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState: jobsInitialState,
  reducers: {
    create: {
      reducer: (state, { payload }) => {
        state.unshift(payload)
      },
      prepare: ({ name, categories }) => ({
        payload: {
          id: uuidv4(),
          name,
          categories: categories.map(category => category.text),
          isConfirmed: false
        }
      })
    }
  }
})

export const { create } = jobsSlice.actions

export const selectJobs = state => state.jobs

export default jobsSlice.reducer