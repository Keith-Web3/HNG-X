import { ActionFunction, Form, Link, redirect } from 'react-router-dom'

import '../../sass/login.scss'
import supabase from '../../services/supabase'
import toast from 'react-hot-toast'

export const signupAction: ActionFunction = async function ({ request }) {
  const toastId = toast.loading('signing up...')
  const formData = await request.formData()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const user = await supabase.auth.signUp({ email, password })
  toast.dismiss(toastId)

  if (user.data.user === null) {
    toast.error(user.error!.message)
    return null
  }

  throw redirect('/')
}

const Signup = function () {
  return (
    <div className="login">
      <Form className="login-form" method="POST">
        <label htmlFor="email">
          Email:
          <input type="email" name="email" id="email" />
        </label>
        <label htmlFor="passsword">
          Password:
          <input minLength={6} type="password" name="password" id="password" />
        </label>
        <button>signup</button>
      </Form>
      <Link to="/login">Already have an account? Login</Link>
    </div>
  )
}

export default Signup
