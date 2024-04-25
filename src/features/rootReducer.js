import { combineReducers } from "redux"
import { reducer as counter } from './counter.js'
import { reducer as books } from './books.js'

const rootReducer = combineReducers({
	// Här lägger vi till våra reducers
	counter: counter,
	books: books
})
/* Så här kan vi tänka oss att Redux lagrar datan i store:
store = {
	counter: 25,
	books: [ ..... ]
}
*/

export default rootReducer

