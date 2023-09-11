import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";


interface Props {
  tickets: {ticketNo:number, escritorio:number, agente:string}[]
}

export const HistorialClinetes = ({tickets}:Props) => {

  const dataTicketNo = tickets.slice(9)
  console.log(dataTicketNo)
  return (
    <>
    <h2 className="text-center">Historial</h2>
    {
      dataTicketNo.map((tickes, index) => (

          <Card className="max-w-[500px]  mt-5" key={index}>
              <CardHeader className="flex gap-3">
              
                <div className="flex flex-col">
                  <p className="text-md ">Ticket No. <span>{tickes.ticketNo}</span></p>
                  <p className="text-small text-default-500">En el escritorio:  <span className="border-1 border-rose-900 bg-rose-300 p-1  mr-3">{tickes.escritorio} </span>Agente: <span className="text-sm border-1 border-green-800 bg-emerald-200 rounded-md " >{tickes.agente}</span></p>
                </div>
              </CardHeader>
            <Divider/>
            
            

        </Card>
      ))

    }
    </>
  )
}
