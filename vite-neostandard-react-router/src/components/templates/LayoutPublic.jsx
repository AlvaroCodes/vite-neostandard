import { Outlet } from 'react-router'
import NavBar from '../organisms/NavBar'

const LayoutPublic = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <footer>Footer Layout Public</footer>
    </>
  )
}

export default LayoutPublic
