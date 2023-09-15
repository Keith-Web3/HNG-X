import '../sass/hero.scss'

const Hero = function ({
  setMovieQuery,
}: {
  setMovieQuery: React.Dispatch<React.SetStateAction<string>>
}) {
  return (
    <div className="hero">
      <div className="hero--container">
        <nav className="hero__navbar">
          <img src="/logo.svg" alt="logo" />
          <label htmlFor="search">
            <input
              type="text"
              id="searchbar"
              onInput={e => {
                setMovieQuery(e.target.value)
              }}
              placeholder="What do you want to watch?"
            />
            <img src="/search.svg" alt="search" />
          </label>
          <button className="sign-in">
            Sign in
            <img src="/menu.svg" alt="menu" />
          </button>
        </nav>
        <div className="hero__main">
          <h1>John Wick 3 : Parabellum</h1>
          <div className="ratings">
            <p className="imdb">
              <img src="/imdb.png" alt="imdb-rating" />
              86.0 / 100
            </p>
            <p className="rotten-tomatoes">
              <img src="/tomatoes.png" alt="rotten-tomatoes-rating" />
              97%
            </p>
          </div>
          <p className="movie-description">
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </p>
          <button className="watch">
            <img src="/play.svg" alt="watch-trailer" />
            watch trailer
          </button>
        </div>
        <ul className="hero__pagination">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
    </div>
  )
}

export default Hero
