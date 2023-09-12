import { useParams } from 'react-router-dom'
import NavBar from './NavBar'

import '../sass/moviedetails.scss'

function MovieDetails() {
  const params = useParams()
  console.log(params.id)
  return (
    <div className="movie-details">
      <NavBar />
    </div>
  )
}

export default MovieDetails
