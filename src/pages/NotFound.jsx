import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="page not-found-page">
      <div className="not-found-num">404</div>
      <h1 className="not-found-title">Page not found</h1>
      <p className="not-found-sub">The page you're looking for doesn't exist.</p>
      <Link to="/" className="home-cta">Go Home</Link>
    </div>
  )
}

export default NotFound