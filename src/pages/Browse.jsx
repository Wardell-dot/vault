import { useState } from 'react'
import { Link } from 'react-router-dom'
import books from '../data/books'

function Browse() {
  const [filter, setFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState('All')

  const genres = ['All', ...new Set(books.map(b => b.genre))]
  const statuses = ['All', 'Read', 'Reading', 'To Read']

  const filtered = books.filter(b => {
    const genreMatch = filter === 'All' || b.genre === filter
    const statusMatch = statusFilter === 'All' || b.status === statusFilter
    return genreMatch && statusMatch
  })

  return (
    <div className="page browse">
      <div className="browse-header">
        <h1 className="browse-title">Collection</h1>
        <p className="browse-sub">{filtered.length} of {books.length} books</p>
      </div>

      <div className="filters">
        <div className="filter-group">
          <span className="filter-label">Genre</span>
          {genres.map(g => (
            <button
              key={g}
              className={`filter-btn ${filter === g ? 'active' : ''}`}
              onClick={() => setFilter(g)}
            >
              {g}
            </button>
          ))}
        </div>
        <div className="filter-group">
          <span className="filter-label">Status</span>
          {statuses.map(s => (
            <button
              key={s}
              className={`filter-btn ${statusFilter === s ? 'active' : ''}`}
              onClick={() => setStatusFilter(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="book-grid">
        {filtered.map(book => (
          <Link to={`/book/${book.id}`} key={book.id} className="book-card">
            <div className="book-card-cover">
              <img src={book.cover} alt={book.title} />
              <div className={`book-status status-${book.status.toLowerCase().replace(' ', '-')}`}>
                {book.status}
              </div>
            </div>
            <div className="book-card-info">
              <div className="book-card-genre">{book.genre}</div>
              <div className="book-card-title">{book.title}</div>
              <div className="book-card-author">{book.author}</div>
              <div className="book-card-meta">
                <span>{book.year}</span>
                <span>{book.pages}p</span>
                <span>★ {book.rating}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Browse