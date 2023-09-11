import React, { useContext, useEffect } from 'react'
import { UIContext } from '../context/UIContext'

export const useHiddenMenu = (ocultar:boolean) => {

   const {showMenu, hidenMenu} = useContext(UIContext)

   useEffect(() => {
    if (ocultar) {
        hidenMenu()
    }else{
        showMenu()
    }
   }, [ocultar, hidenMenu, showMenu])
   
  return (
    <div>useHiddenMenu</div>
  )
}
