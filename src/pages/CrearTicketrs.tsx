import React, { useContext, useState } from 'react'
import {Button} from "@nextui-org/react";
import { useHiddenMenu } from '../hooks/useHiddenMenu';
import { SocketContext } from '../context/SocketContext';

interface Ticket {
  agente: null | string;
  escritorio: null | string;
  id: string;
  numero: number;
}

export const CrearTicketrs = () => {
  useHiddenMenu(false);
  const {socket} = useContext(SocketContext)
  const [ticket, setTicket] = useState<Ticket>(null)
  //crear ticket
  const nuevoTicket = () => {
    // al emitir un evemto mandamos en en objeto o data tamnien podemos enviar una funcion
    socket.emit('solicitar-ticket', null, (ticket:Ticket) =>{
      console.log(ticket)
      setTicket(ticket)
      
    })
  }
  return (
    <>
        <section className=' w-10/12 mt-0 mb-3 m-auto'>
            <h2 className='text-center mt-3 text-2xl'>Presione el boton para un nuevo <span className=' text-amber-400 font-extrabold'>Ticket</span></h2>

            <div className='flex justify-center mt-3'>
            <Button onClick={nuevoTicket} color="primary" variant="flat">
               Nuevo Ticket
            </Button>  
            </div>
        </section>
        <hr />
        {
          ticket && (
          <div className='flex flex-col items-center mt-5'>
            <p>Su numero</p>
            <h2 className=' text-amber-500 font-extrabold text-2xl'>{ticket.numero}</h2>
          </div>
          )

        }
    </>
  )
}
