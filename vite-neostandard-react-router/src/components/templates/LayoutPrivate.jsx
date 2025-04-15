import { Navigate, Outlet } from 'react-router'
import { useUserContext } from '../../lib/hooks/useUserContext'

const LayoutPrivate = () => {
  const { user } = useUserContext()

  return (
    <>
      {user ? <Outlet /> : <Navigate to='/login' />}
    </>
  )
}

export default LayoutPrivate
