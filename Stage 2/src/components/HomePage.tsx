import FeaturedMovies from './FeaturedMovies'
import Hero from './Hero'

const HomePage = function () {
  return (
    <div className="homepage">
      <Hero />
      <FeaturedMovies />
    </div>
  )
}

export default HomePage
