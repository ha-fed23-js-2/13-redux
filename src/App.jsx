// import { useState } from 'react'
import './App.css'
import Counter from './components/Counter.jsx'

function App() {
	// const [count, setCount] = useState(0)

	return (
		<div className="app">
			<header>
				Redux demo
			</header>
			<main>
				<Counter />
			</main>
		</div>
	)
}

export default App
