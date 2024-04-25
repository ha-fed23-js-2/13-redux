import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../features/books.js'

const BookShop = () => {
	const books = useSelector(state => state.books)
	const dispatch = useDispatch()

	return (
		<section className="book-shop">
			<h2> Ye Olde Book Shoppe </h2>
			<div className="book-list">

				{books.map(book => (
					<div key={book.id} className="book-list-item">
						{book.title} by {book.author} ... ${book.price}
						<button onClick={() => dispatch(actions.deleteBook(book.id))}> Delete </button>
					</div>
				))}


			</div>
		</section>
	)
}

export default BookShop
