import { useEffect, useState } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const LoginPage = () => {
  const { currentUser, isAuthenticated, logIn, logOut, getToken } = useAuth()

  const [token, setToken] = useState(null)
  useEffect(() => {
    getToken()
      .then((token) => setToken(token))
      .catch((e) => {
        setToken(null)
        throw e
      })
  }, [getToken, setToken, currentUser])

  return (
    <>
      <MetaTags title="Login" description="Login page" />

      <h1>LoginPage</h1>
      <p>
        Find me in <code>./web/src/pages/LoginPage/LoginPage.tsx</code>
      </p>
      <p>
        My default route is named <code>login</code>, link to me with `
        <Link to={routes.login()}>Login</Link>`
      </p>

      <p>
        {!isAuthenticated && <button onClick={() => logIn()}>Log In</button>}
        {isAuthenticated && <button onClick={() => logOut()}>Log Out</button>}

        {token && (
          <textarea
            data-role="tokendisplay123"
            onClick={(e) => (e.target as HTMLTextAreaElement).select()}
            readOnly
            value={JSON.stringify(
              {
                'auth-provider': 'firebase',
                Authorization: `Bearer ${token}`,
              },
              null,
              4
            )}
          />
        )}
        <code style={{ whiteSpace: 'pre' }}>
          {JSON.stringify(currentUser, null, 4)}
        </code>
      </p>
    </>
  )
}

export default LoginPage
