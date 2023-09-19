import { Outlet, redirect } from 'react-router-dom'
import supabase from '../services/supabase'

export async function homepageLoader() {
  const user = await supabase.auth.getUser()
  const isLoggedIn = user.data.user !== null

  if (!isLoggedIn) {
    throw redirect('/login')
  }
  return null
}

function AuthRequired() {
  return <Outlet />
}

export default AuthRequired
