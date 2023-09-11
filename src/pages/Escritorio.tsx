import React, { useContext, useEffect, useState } from 'react'
import {Button} from "@nextui-org/react";
import {User} from "@nextui-org/react";
import { useHiddenMenu } from '../hooks/useHiddenMenu';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';
import { Navigate, useNavigate } from 'react-router-dom';
import { SocketContext } from '../context/SocketContext';

interface Ticket {
  agente: null | string;
  escritorio: null | string;
  id: string;
  numero: number;
}

export const Escritorio = () => {

  useHiddenMenu(true)
  const navigate = useNavigate()
  const [usuario] = useState(getUsuarioStorage())
  const {socket} = useContext(SocketContext)
  const [ticket, setTicket] = useState<Ticket>(null)

  const salir = () => {
    localStorage.clear()
    navigate('/Ingresar', { replace: true });

  }

  const siguenteTicket = () => {
    socket.emit('siguente-ticket-trabajo', usuario, (ticket:Ticket) => {
      setTicket(ticket)
    } )
  }

  if (!usuario.agente && !usuario.escritorio) {
    return <Navigate to='/Ingresar' />
  }

  return (
    <>
      <div className=' w-10/12 mt-0 m-auto h-screen'>
        <div className='mt-5 flex justify-between'>
          <section>
            
            <User   
              name="Josue Castillo"
              description="FrontEnd Developer"
              avatarProps={{
                src: "https://media.licdn.com/dms/image/D4E35AQGK1V2BgfgTAw/profile-framedphoto-shrink_200_200/0/1689967999094?e=1694757600&v=beta&t=AimaRnNHDyoQJkmkem4pJosMVgw1dlAfliyxji7r8BE"
                 }}
            />
            <h2>Usted esta trabajando en el escritorio <span className=' text-amber-500 font-bold text-xl'>{usuario.escritorio}</span></h2>
          </section>

          <div>
          <Button type='submit' onClick={salir}  color="danger" variant="shadow">
                  Salir
          </Button>  
          </div>
        </div>

        <hr />
        
      
        <div className='mt-5 flex justify-between'>
          {
            ticket && (
          <section className=''>
            <h2>Esta atentiendo el ticket numero: <span className=' text-amber-500 font-semibold text-xl'></span>{ticket?.numero}</h2>
          </section>
              
            )
          }
          <div>
          <Button type='submit' onClick={siguenteTicket} color="primary" variant="shadow">
                  Siguente
          </Button>  
          </div>

        </div>
      </div>
    </>
  )
}
