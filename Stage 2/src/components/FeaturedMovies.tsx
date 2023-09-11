import { useEffect, useState } from 'react'
import Card from './Card'
import '../sass/featuredmovies.scss'

const FeaturedMovies = function () {
  const [data, setData] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        console.log(json.results)
        setData(json.results)
      })
      .catch(err => console.error('error:' + err))
      .finally(() => setIsLoading(false))
  }, [])
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
                <Card
                  key={movie.id}
                  img={movie.poster_path}
                  title={movie.title}
                  releaseDate={movie.release_date}
                  rating={movie.vote_average}
                />
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: import.meta.env.VITE_TMBD_TOKEN,
  },
}

export default FeaturedMovies
