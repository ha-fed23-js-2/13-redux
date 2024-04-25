import { useSelector } from 'react-redux'

const BookShop = () => {
	const books = useSelector(state => state.books)

	return (
		<section className="book-shop">
			<h2> Ye Olde Book Shoppe </h2>
			<div className="book-list">

				{books.map(book => (
					<div key={book.id} className="book-list-item">
						{book.title} by {book.author} ... ${book.price}
					</div>
				))}


			</div>
		</section>
	)
}

export default BookShop
