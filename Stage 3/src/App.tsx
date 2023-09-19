import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import Login, { loginAction } from './features/Auth/Login'
import AuthRequired, { homepageLoader } from './pages/AuthRequired'
import Homepage from './pages/Homepage'
import Signup, { signupAction } from './features/Auth/Signup'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="login" action={loginAction} element={<Login />} />
        <Route path="signup" action={signupAction} element={<Signup />} />
        <Route element={<AuthRequired />} loader={homepageLoader}>
          <Route index element={<Homepage />} />
        </Route>
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App
