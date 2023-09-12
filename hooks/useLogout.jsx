import { useEffect, useState } from 'react'
import { useAuthContext } from './useAuthContext'
import useAxios from "./useAxios";

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()
  const { data, loading, errorResponse, fetchData } = useAxios();
  
  const logout = async () => {
    setError(null)
    setIsPending(true)
    console.log("Log out called")
    try {
      // sign the user out
      const req = { method:"get" } ;
      await fetchData("/users/logout", req);
      
      // dispatch logout action
      dispatch({ type: 'LOGOUT' })
      setIsPending(false)
      // update state
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

  return { logout, error, isPending }
}