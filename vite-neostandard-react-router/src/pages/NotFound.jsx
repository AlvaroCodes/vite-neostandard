import { Link, useRouteError } from 'react-router'

const NotFound = () => {
  const error = useRouteError()
  console.log(error)

  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <p>{error.statusText || error.message}</p>
      <Link to='/'>Go to Home</Link>
    </div>
  )
}
export default NotFound
