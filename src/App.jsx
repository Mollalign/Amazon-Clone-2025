import React, { useEffect, useContext } from 'react'
import Routing from './Router.jsx'
import DataContext from './Components/DataProvider/DataContext.js'
import { Type } from './Utility/action.type.js'
import {auth} from './Utility/firebase'

const App = () => {
  const [{user}, dispatch] = useContext(DataContext)

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser){
        dispatch({
          type: Type.SET_USER,
          user: authUser
        })
      }else{
        dispatch({
          type: Type.SET_USER,
          user: null 
        })
      }
    })

  },[])

  return (
    <>
      <Routing/>
    </>
  )
}

export default App