import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const categoriesInitialState = [
 {
   id: uuidv4(),
   name: 'Shed',
   list: [
    { id: 1, item: 'suspendisse', quantity: 6, description: 'dsifefdsafd sdf dfs' },
    { id: 2, item: 'proin', quantity: 8, description: 'skjfm sdf dsg' },
    { id: 3, item: 'libero', quantity: 55, description: 'lorem ipspsd ' },
    { id: 4, item: 'er', quantity: 43, description: 'sdf ghtr r' },
    { id: 5, item: 'vestibulum', quantity: 41, description: 'dsge e dg' },
    { id: 6, item: 'natoque', quantity: 28, description: 'tefdg htrsd g' },
    { id: 7, item: 'pede', quantity: 23, description: 'true eusd sd' },
    { id: 8, item: 'leo', quantity: 4, description: 'esdf opef' },
    { id: 9, item: 'eget', quantity: 23, description: 'sdl eofsm' },
    { id: 10, item: 'vestibulum', quantity: 41, description: 'dsge e dg' },
    { id: 11, item: 'natoque', quantity: 28, description: 'tefdg htrsd g' },
    { id: 12, item: 'pede', quantity: 23, description: 'true eusd sd' },
    { id: 13, item: 'leo', quantity: 4, description: 'esdf opef' },
    { id: 14, item: 'eget', quantity: 23, description: 'sdl eofsm' }
   ]
 },
 {
   id: uuidv4(),
   name: 'Scaffold',
   list: [
    { id: 1, item: 'suspendisse', quantity: 6, description: 'dsifefdsafd sdf dfs' },
    { id: 2, item: 'proin', quantity: 8, description: 'skjfm sdf dsg' },
    { id: 3, item: 'libero', quantity: 55, description: 'lorem ipspsd ' },
    { id: 4, item: 'er', quantity: 43, description: 'sdf ghtr r' },
    { id: 5, item: 'vestibulum', quantity: 41, description: 'dsge e dg' }
   ]
 },
 {
   id: uuidv4(),
   name: 'System scaffold',
   list: [
    { id: 1, item: 'er', quantity: 43, description: 'sdf ghtr r' },
    { id: 2, item: 'vestibulum', quantity: 41, description: 'dsge e dg' }
   ]
 },
 {
   id: uuidv4(),
   name: 'Shoring',
   list: [
    { id: 1, item: 'suspendisse', quantity: 6, description: 'dsifefdsafd sdf dfs' },
    { id: 2, item: 'proin', quantity: 8, description: 'skjfm sdf dsg' },
    { id: 3, item: 'libero', quantity: 55, description: 'lorem ipspsd ' },
    { id: 4, item: 'er', quantity: 43, description: 'sdf ghtr r' },
    { id: 5, item: 'vestibulum', quantity: 41, description: 'dsge e dg' },
    { id: 6, item: 'er', quantity: 43, description: 'sdf ghtr r' },
    { id: 7, item: 'vestibulum', quantity: 41, description: 'dsge e dg' }
   ]
 },
 {
   id: uuidv4(),
   name: 'Stair Towers',
   list: [
    { id: 1, item: 'vestibulum', quantity: 41, description: 'dsge e dg' },
    { id: 2, item: 'er', quantity: 43, description: 'sdf ghtr r' },
    { id: 3, item: 'vestibulum', quantity: 41, description: 'dsge e dg' }
   ]
 },
 {
   id: uuidv4(),
   name: 'System scaffold',
   list: [
    { id: 1, item: 'libero', quantity: 55, description: 'lorem ipspsd ' },
    { id: 2, item: 'er', quantity: 43, description: 'sdf ghtr r' },
    { id: 3, item: 'vestibulum', quantity: 41, description: 'dsge e dg' },
    { id: 4, item: 'er', quantity: 43, description: 'sdf ghtr r' }
   ]
 },
 {
   id: uuidv4(),
   name: 'Towers Stair',
   list: [
    { id: 1, item: 'suspendisse', quantity: 6, description: 'dsifefdsafd sdf dfs' },
    { id: 2, item: 'proin', quantity: 8, description: 'skjfm sdf dsg' },
    { id: 3, item: 'libero', quantity: 55, description: 'lorem ipspsd ' },
    { id: 4, item: 'er', quantity: 43, description: 'sdf ghtr r' },
    { id: 5, item: 'vestibulum', quantity: 41, description: 'dsge e dg' },
    { id: 6, item: 'er', quantity: 43, description: 'sdf ghtr r' }
   ]
 },
 {
   id: uuidv4(),
   name: 'Event',
   list: [
    { id: 1, item: 'suspendisse', quantity: 6, description: 'dsifefdsafd sdf dfs' },
    { id: 2, item: 'proin', quantity: 8, description: 'skjfm sdf dsg' },
    { id: 3, item: 'libero', quantity: 55, description: 'lorem ipspsd ' },
    { id: 4, item: 'er', quantity: 43, description: 'sdf ghtr r' },
    { id: 5, item: 'vestibulum', quantity: 41, description: 'dsge e dg' },
    { id: 6, item: 'er', quantity: 43, description: 'sdf ghtr r' },
    { id: 7, item: 'vestibulum', quantity: 41, description: 'dsge e dg' },
    { id: 8, item: 'er', quantity: 43, description: 'sdf ghtr r' }
   ]
 }
]

export const categoriesSlice = createSlice({
 name: 'categories',
 initialState: categoriesInitialState,
 reducers: {}
})

export const selectCategories = state => state.categories

export default categoriesSlice.reducer