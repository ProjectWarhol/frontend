import { useEffect, useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

const ResolveAuthScreen = () => {
  const { tryLocalLogin } = useContext(AuthContext)

  useEffect(() => {
    tryLocalLogin()
  }, [])

  return null
};

export default ResolveAuthScreen
