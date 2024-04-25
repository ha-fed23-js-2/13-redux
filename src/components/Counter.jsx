import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../features/counter.js'

const Counter = () => {
	const count = useSelector(state => state.counter)
	const dispatch = useDispatch()

	const handleIncrease  = () => dispatch(actions.increase())
	const handleDecrease2 = () => dispatch(actions.decrease(2))
	const handleDecrease5 = () => dispatch(actions.decrease(5))

	return (
		<section className="counter">
			<p>
			You have ${count}.
			</p>
			<p>
				<button onClick={handleIncrease}> Increase by $1 </button>
				<button onClick={handleDecrease2}> Decrease by $2 </button>
				<button onClick={handleDecrease5}> Decrease by $5 </button>
			</p>
		</section>
	)
}
export default Counter
