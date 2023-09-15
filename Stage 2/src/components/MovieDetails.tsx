import { useParams } from 'react-router-dom'
import NavBar from './NavBar'

import '../sass/moviedetails.scss'
import { useState, useEffect } from 'react'

function MovieDetails() {
  const params = useParams()
  const [data, setData] = useState<any>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const url = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`
    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setData(json)
      })
      .catch(err => console.error('error:' + err))
      .finally(() => setIsLoading(false))
  }, [])
  return (
    <div className="movie-details">
      <NavBar />
      {!isLoading && (
        <div className="movie">
          <img
            src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
            alt="movie-image"
            className="movie__img"
          />
          <div className="movie__header">
            <p data-testid="movie-title">{data.title}</p>
            <span className="seperator"></span>
            <p data-testid="movie-release-date">{data.release_date}</p>
            <span className="seperator"></span>
            <p className="rating">PG-13</p>
            <span className="seperator"></span>{' '}
            <p data-testid="movie-runtime">{data.runtime}</p>
            <div className="genres">
              {data.genres?.map((genre: { id: string; name: string }) => (
                <p key={genre.id}>{genre.name}</p>
              ))}
            </div>
          </div>
          <div className="movie__details">
            <div className="main">
              <p data-testid="movie-overview">{data.overview}</p>
              <div className="extras">
                <p className="extra">
                  Director : <span>Joseph Kosinski</span>
                </p>
                <p className="extra">
                  Writers : <span>Jim Cash, Jack Epps Jr, Peter Craig</span>
                </p>
                <p className="extra">
                  Stars :{' '}
                  <span>Tom Cruise, Jennifer Connelly, Miles Teller</span>
                </p>
              </div>
              <div className="footer">
                <p className="tag">Top rated movie #65</p>
                <p className="awards">Awards 9 nominations</p>
                <img src="/expand.svg" alt="expand" />
              </div>
            </div>
            <div className="aside">
              <p className="details">
                <img src="/tickets.svg" alt="showtimes" />
                See Showtimes
              </p>
              <p className="details">
                <img src="/list.svg" alt="watch-more" />
                More watch options
              </p>
              <div className="best-movies">
                <img src="/best.png" alt="best" />
                <p>
                  <img src="/list-light.svg" alt="list" />
                  The Best Movies in September
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
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

export default MovieDetails
