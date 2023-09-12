import '../sass/navbar.scss'

const NavBar = function () {
  return (
    <div className="nav-bar">
      <img className="logo" src="/logo-dark.svg" alt="logo" />
      <ul className="links">
        <li>
          <img src="/home.svg" alt="home" />
          <p>Home</p>
        </li>
        <li>
          <img src="/movie.svg" alt="movies" />
          <p>Movies</p>
        </li>
        <li>
          <img src="/tv.svg" alt="tv-series" />
          <p>TV Series</p>
        </li>
        <li>
          <img src="/calendar.svg" alt="upcoming" />
          <p>Upcoming</p>
        </li>
      </ul>
      <div className="modal">
        <p className="modal__main">Play movie quizes and earn free tickets</p>
        <p className="modal__subheader">50k people are playing now</p>
        <button>Start playing</button>
      </div>
      <button className="logout">
        <img src="/logout.svg" alt="logout" />
        Log out
      </button>
    </div>
  )
}

export default NavBar
