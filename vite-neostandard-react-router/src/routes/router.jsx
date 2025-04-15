import { createBrowserRouter } from 'react-router'
import Index from '../pages'
import Login from '../pages/login'
import Private from '../pages/private'
import LayoutPublic from '../components/templates/LayoutPublic'
import NotFound from '../pages/NotFound'
import LayoutPrivate from '../components/templates/LayoutPrivate'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/private',
        element: <LayoutPrivate />,
        children: [
          {
            index: true,
            element: <Private />,
          },
        ],
      }
    ]
  }
])

export default router
