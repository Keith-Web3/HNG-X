import HomePage from './components/HomePage'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import MovieDetails from './components/MovieDetails'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="movies/:id" element={<MovieDetails />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App
