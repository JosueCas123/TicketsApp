import React from 'react'
import { RoutesPage } from './pages/RoutesPage'

// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";
import { UiProvider } from './context/UIContext';
import { SocketProvider } from './context/SocketContext';

const TicketsApp = () => {
  return (
    <SocketProvider>
      <NextUIProvider>
        <UiProvider>
          <RoutesPage />
        </UiProvider>
      </NextUIProvider>
    </SocketProvider>
   
  )
}

export default TicketsApp