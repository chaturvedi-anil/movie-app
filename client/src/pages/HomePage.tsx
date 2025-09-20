
import { Link } from 'react-router-dom'
// import Card from '../ui/Card'
// import Button from '../ui/Button'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto py-12 px-4">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-4xl font-extrabold mb-4">Welcome to MovieApp</h1>
            <p className="text-gray-700 mb-6">Discover movies, add to watchlist, rate and review. Sign up now to create your personal collection.</p>
            <div className="flex gap-3">
              {/* <Link to="/register"><Button>Get Started</Button></Link>
              <Link to="/login"><Button variant="secondary">Sign in</Button></Link> */}
              <Link to="/register"> Get Started </Link>
              <Link to="/login">Sign in</Link>
            </div>
          </div>
          <div>
            {/* <Card>
              <div className="text-center">
                <img src="/placeholder-movie.png" alt="movies" className="mx-auto w-40 h-40 object-cover mb-4" />
                <h3 className="text-lg font-semibold">Top picks</h3>
                <p className="text-sm text-gray-500 mt-2">Explore curated lists and trending movies.</p>
              </div>
            </Card> */}
             <div className="text-center">
                <img src="/placeholder-movie.png" alt="movies" className="mx-auto w-40 h-40 object-cover mb-4" />
                <h3 className="text-lg font-semibold">Top picks</h3>
                <p className="text-sm text-gray-500 mt-2">Explore curated lists and trending movies.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
