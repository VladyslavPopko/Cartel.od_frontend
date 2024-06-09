import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	whos: false,
	divisions: false,
	categories: false,
	isWho: false,
	isDivision: false,
}

const dbSlice = createSlice({
	name: 'db',
	initialState,
	reducers: {
		changeWhos: (state, { payload }) => {
			state.whos = payload
		},
		changeDivisions: (state, { payload }) => {
			state.divisions = payload
		},
		changeCategories: (state, { payload }) => {
			state.categories = payload
		},
		setIsWho: (state, { payload }) => {
			state.isWho = payload
		},
		setIsDivision: (state, { payload }) => {
			state.isDivision = payload
		},
	},
})

export const {
	changeWhos,
	changeDivisions,
	changeCategories,
	setIsWho,
	setIsDivision,
} = dbSlice.actions
export default dbSlice.reducer
