import { combineReducers } from "redux"
import { reducer as counter } from './counter.js'

const rootReducer = combineReducers({
	// Här lägger vi till våra reducers
	counter: counter
})
/* Så här kan vi tänka oss att Redux lagrar datan i store:
store = {
	counter: 25
}
*/

export default rootReducer

