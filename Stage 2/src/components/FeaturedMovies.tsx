import { useDeferredValue, useEffect, useState } from 'react'
import Card from './Card'
import '../sass/featuredmovies.scss'
import { Link } from 'react-router-dom'

const FeaturedMovies = function ({ movieQuery }: { movieQuery: string }) {
  const [data, setData] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const deferredQuery = useDeferredValue(movieQuery)

  useEffect(() => {
    setIsLoading(true)
    const url =
      deferredQuery.trim() === ''
        ? 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
        : `https://api.themoviedb.org/3/search/movie?query=${deferredQuery}&include_adult=false&language=en-US&page=1`

    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        console.log(json.results)
        setData(json.results.slice(0, 10))
      })
      .catch(err => console.error('error:' + err))
      .finally(() => setIsLoading(false))
  }, [deferredQuery])
  return (
    <div className="featured">
      <div className="featured--container">
        <header className="featured__header">
          <p>featured movie</p>
          <p className="see-more">
            See more <img src="chevron.svg" alt="see more" />
          </p>
        </header>
        {!isLoading && (
          <div className="featured__main">
            {data?.map(movie => {
              return (
                <Link
                  key={movie.id}
                  className="card-link"
                  to={`/movies/${movie.id}`}
                >
                  <Card
                    img={movie.poster_path}
                    title={movie.title}
                    releaseDate={movie.release_date}
                    rating={movie.vote_average}
                  />
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: import.meta.env.VITE_TMBD_TOKEN,
  },
}

export default FeaturedMovies
