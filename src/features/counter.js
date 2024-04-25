import { createAction, createReducer } from '@reduxjs/toolkit'

const increase = createAction('increase by 1')
const decrease = createAction('decrease by x')
// Skapa fler action-funktioner här

const actions = {
	increase, decrease
}

const initialState = 25

// Reducer är en funktion som producerar nästa state
const reducer = createReducer(initialState, builder => {
	// Ett case för varje action
	builder
		.addCase(increase, (state, action) => state + 1)
		.addCase(decrease, (state, action) => state - action.payload)
})



export { actions, reducer }
