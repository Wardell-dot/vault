import { Link } from 'react-router-dom'
import books from '../data/books'

function Home() {
  const reading = books.filter(b => b.status === 'Reading')
  const recent = books.filter(b => b.status === 'Read').slice(0, 3)
  const toRead = books.filter(b => b.status === 'To Read').length

  return (
    <div className="page home">
      <div className="home-hero">
        <div className="home-hero-text">
          <p className="home-eyebrow">Your Reading Vault</p>
          <h1 className="home-title">
            {books.length} <span>books.</span><br />
            One place.
          </h1>
          <p className="home-sub">{toRead} books waiting to be read.</p>
          <Link to="/browse" className="home-cta">Browse Collection</Link>
        </div>
        <div className="home-stats">
          <div className="stat">
            <div className="stat-num">{books.filter(b => b.status === 'Read').length}</div>
            <div className="stat-label">Read</div>
          </div>
          <div className="stat">
            <div className="stat-num">{books.filter(b => b.status === 'Reading').length}</div>
            <div className="stat-label">Reading</div>
          </div>
          <div className="stat">
            <div className="stat-num">{toRead}</div>
            <div className="stat-label">To Read</div>
          </div>
        </div>
      </div>

      {reading.length > 0 && (
        <section className="home-section">
          <div className="section-header">
            <h2 className="section-title">Currently Reading</h2>
          </div>
          <div className="book-row">
            {reading.map(book => (
              <Link to={`/book/${book.id}`} key={book.id} className="book-card-sm">
                <div className="book-card-sm-cover">
                  <img src={book.cover} alt={book.title} />
                </div>
                <div className="book-card-sm-info">
                  <div className="book-card-sm-title">{book.title}</div>
                  <div className="book-card-sm-author">{book.author}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="home-section">
        <div className="section-header">
          <h2 className="section-title">Recently Read</h2>
          <Link to="/browse" className="section-link">View all</Link>
        </div>
        <div className="book-row">
          {recent.map(book => (
            <Link to={`/book/${book.id}`} key={book.id} className="book-card-sm">
              <div className="book-card-sm-cover">
                <img src={book.cover} alt={book.title} />
              </div>
              <div className="book-card-sm-info">
                <div className="book-card-sm-title">{book.title}</div>
                <div className="book-card-sm-author">{book.author}</div>
                <div className="book-card-sm-genre">{book.genre}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home