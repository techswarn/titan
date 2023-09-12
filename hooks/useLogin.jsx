import { useState, useEffect } from 'react'
import { useAuthContext } from './useAuthContext'
import useAxios from './useAxios';

export const useLogin = () => {
  const { data, loading, errorResponse, fetchData } = useAxios();
  console.log(data)
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setError(null)
    setIsPending(true)
  
    try {
      // login

      const req = {
        email: email,
        password: password,
        method: "post"
      }
      await fetchData("/users/signin", req)
      console.log(data)

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: data })
      setIsPending(false)
      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }
    } 
    catch(err) {
      if (!isCancelled) {
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { login, isPending, error }
}