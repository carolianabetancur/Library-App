/* import React, { useState } from 'react';

const UserContext = React.createContext()
const { Provider, Consumer } = UserContext

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = () => {
    setUser({ correo: "" })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <Provider value={{user, login, logout}}>
      {children}
    </Provider>
  )
}
export { UserProvider, Consumer as UserConsumer, UserContext }
 */