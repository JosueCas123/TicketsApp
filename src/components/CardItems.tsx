import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

interface Props {
  tickets: {numero:number, escritorio:number, agente:string}[]
}

export const CardItems = ({tickets}:Props) => {
  console.log(tickets)
  const dataTicketNo = tickets.slice(9)
  console.log(dataTicketNo)

  return (
    <>
    {
      dataTicketNo.map((tickes, index )=> (

          <Card className="max-w-[400px] mt-5" key={index}>
              <CardHeader className="flex gap-3">
              
                <div className="flex flex-col">
                  <p className="text-md text-3xl">No. <span>{tickes.numero}</span></p>
                  <p className="text-small text-default-500">Tiempo maximo de espera 15 minutos</p>
                </div>
              </CardHeader>
            <Divider/>
              <CardBody>
              <div className='flex justify-around '>
                <p className="text-sm border-1 border-green-800 bg-emerald-200 p-1 rounded-md">Agente: <span>{tickes.agente}</span></p>
                <p className="text-sm border-1 border-rose-900 bg-rose-300 p-1 rounded-md">Escritorio: <span>{tickes.escritorio}</span></p>
              </div>
              </CardBody>
            <Divider/>

        </Card>
      ))

    }
    </>
  )
}
