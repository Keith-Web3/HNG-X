import HomePage from './components/HomePage'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomePage />}>
        <Route path="movies/:id" />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App
