import { useNavigate } from 'react-router'
import { useUserContext } from '../lib/hooks/useUserContext'

const Login = () => {
  const { setUser } = useUserContext()
  const navigate = useNavigate()

  const handleLogin = () => {
    setUser(true)
    navigate('/private')
  }

  return (
    <>
      <h1>Login</h1>
      <button onClick={() => handleLogin()}> Login </button>
    </>
  )
}

export default Login
