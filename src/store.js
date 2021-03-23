import { configureStore } from '@reduxjs/toolkit'
import jobsReducer from './features/jobs/jobsSlice'
import categoriesReducer from './features/categories/categoriesSlice'

export default configureStore({
  reducer: {
    jobs: jobsReducer,
    categories: categoriesReducer
  }
})