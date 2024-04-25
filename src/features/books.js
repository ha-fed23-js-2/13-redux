import { createAction, createReducer } from '@reduxjs/toolkit'
import { defaultBooks } from '../data/bookData.js'

// create, update, delete
const deleteBook = createAction('delete book')

const actions = {
	deleteBook  // payload ska vara ett id
}


// [ { id, title, author, price } ]
const initialState = defaultBooks

const reducer = createReducer(initialState, builder => {
	builder
		.addCase(deleteBook, (state, action) => state.filter(book => book.id !== action.payload))
})

export { actions, reducer }
