import { useState } from 'react'
import FeaturedMovies from './FeaturedMovies'
import Hero from './Hero'

const HomePage = function () {
  const [movieQuery, setMovieQuery] = useState<string>('')
  return (
    <div className="homepage">
      <Hero setMovieQuery={setMovieQuery} />
      <FeaturedMovies movieQuery={movieQuery} />
    </div>
  )
}

export default HomePage
