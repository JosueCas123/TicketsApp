import React, { createContext, useState } from 'react'

type UiContextProps = {
    ocultarMenu:boolean
    showMenu:() => void
    hidenMenu:() => void
}

export const UIContext = createContext({}as UiContextProps)

export const UiProvider = ({children}:any) => {

    const [ocultarMenu, setOcultarMenu] = useState(true)

    const showMenu = () => {
        setOcultarMenu(false)
    }
    const hidenMenu = () => {
        setOcultarMenu(true)
    }

  return (
    <UIContext.Provider value={{
        ocultarMenu,
        showMenu,
        hidenMenu
    }}>
      {children}
    </UIContext.Provider>
  )
}
