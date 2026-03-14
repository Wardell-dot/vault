import { useParams, useNavigate, Link } from 'react-router-dom'
import books from '../data/books'

function BookDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const book = books.find(b => b.id === id)

  if (!book) {
    return (
      <div className="page not-found-page">
        <h1>Book not found</h1>
        <Link to="/browse">Back to collection</Link>
      </div>
    )
  }

  const related = books.filter(b => b.genre === book.genre && b.id !== book.id).slice(0, 3)

  return (
    <div className="page detail">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      <div className="detail-hero">
        <div className="detail-cover">
          <img src={book.cover} alt={book.title} />
        </div>
        <div className="detail-info">
          <div className="detail-genre">{book.genre}</div>
          <h1 className="detail-title">{book.title}</h1>
          <div className="detail-author">{book.author}</div>
          <div className={`detail-status status-${book.status.toLowerCase().replace(' ', '-')}`}>
            {book.status}
          </div>
          <p className="detail-desc">{book.description}</p>
          <div className="detail-meta">
            <div className="detail-meta-item">
              <div className="detail-meta-val">{book.year}</div>
              <div className="detail-meta-key">Year</div>
            </div>
            <div className="detail-meta-item">
              <div className="detail-meta-val">{book.pages}</div>
              <div className="detail-meta-key">Pages</div>
            </div>
            <div className="detail-meta-item">
              <div className="detail-meta-val">★ {book.rating}</div>
              <div className="detail-meta-key">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="related">
          <h2 className="section-title">More in {book.genre}</h2>
          <div className="book-row">
            {related.map(b => (
              <Link to={`/book/${b.id}`} key={b.id} className="book-card-sm">
                <div className="book-card-sm-cover">
                  <img src={b.cover} alt={b.title} />
                </div>
                <div className="book-card-sm-info">
                  <div className="book-card-sm-title">{b.title}</div>
                  <div className="book-card-sm-author">{b.author}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export default BookDetail