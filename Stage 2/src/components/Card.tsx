import '../sass/card.scss'

const Card = function ({
  img,
  title,
  releaseDate,
  rating,
}: {
  img: string
  title: string
  releaseDate: string
  rating: number
}) {
  return (
    <div data-testid="movie-card">
      <img src="/favorite.svg" alt="like-button" className="favourite" />
      <img
        src={'https://image.tmdb.org/t/p/original' + img}
        alt={title}
        data-testid="movie-poster"
      />
      <div className="date">
        <p>USA , </p>
        <p data-testid="movie-release-date">{releaseDate.slice(0, 4)}</p>
      </div>
      <p data-testid="movie-title">{title}</p>
      <div className="ratings">
        <p>
          <img src="/imdb.png" alt="imdb" />
          {(rating * 10).toFixed(1) + ' / 100'}
        </p>
        <p>
          <img src="/tomatoes.png" alt="rotten-tomatoes" />
          {Math.round(Math.random() * 100) + '%'}
        </p>
      </div>
      <p className="genre">Action, Adventure, Horror</p>
    </div>
  )
}

export default Card
