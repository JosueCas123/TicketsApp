
import React, { useContext, useEffect, useState } from 'react'
import { HistorialClinetes } from '../components/HistorialClinetes';
import { CardItems } from '../components/CardItems';
import { useHiddenMenu } from '../hooks/useHiddenMenu';
import { SocketContext } from '../context/SocketContext';
import { getUltimos } from '../helpers/getUltimos';


export const Cola = () => {
  useHiddenMenu(false)
  const {socket} =  useContext(SocketContext)
  const [tickets, setTickets] = useState([])
  console.log(tickets)

 useEffect(() => {
    socket.on('ticket-asignados', (asignados) => {
      console.log(asignados)
      setTickets(asignados)
    })

    return () => {
      socket.off('ticket-asignados')
    }
 }, [socket])
 

 useEffect(() => {
   getUltimos().then(tickets => setTickets(tickets))
 }, [])
 
  return (
    <>
      <section className=' w-10/12 mt-0 m-auto'>
        <h2 className=' text-2xl font-extralight '>Atendiendo al <span className=' text-amber-500 font-extrabold'>Cliente</span></h2>

        <div className='flex w-full flex-wrap  md:flex-nowrap mt-10'>
            <div className=' w-2/4 '>
                <CardItems
                  tickets={tickets}
                />
            </div>
            <div className='w-2/4 '>
              <HistorialClinetes
                tickets={tickets}
              />
            </div>
        </div>
      </section>
    </>
  )
}
