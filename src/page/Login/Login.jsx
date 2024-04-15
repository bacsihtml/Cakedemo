import React, {useState} from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase.config'
import { toast } from 'react-toastify'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const signIn = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user  = userCredential.user
      setLoading(false)
      toast.success('Successfully logged in')
      navigate('/checkout')
    } catch (error) {
      setLoading(false)
      toast.error('Email or password is wrong!')
    }
  }

  return (
    <div className='container'>
      <div className='wrapper'>
        <div className="login">
          <h3 className='fw mb'>Login</h3>
          <form action="" onSubmit={signIn}>
            <div className="form__group">
              <input type="email"placeholder='Enter your email' value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="form__group">
              <input type="password"placeholder='Enter your password' value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <button type='submit' className=' mb btn auth__btn' disabled={loading}>{loading ? 'Currently logged in...' : 'Login'}</button>
            <p className='login-p'>Don't have account? <Link to='/signup'>Creat an account</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login