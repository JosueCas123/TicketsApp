import React, { useState } from 'react'
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {Navigate, useNavigate} from 'react-router-dom'
import { useHiddenMenu } from '../hooks/useHiddenMenu';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';


export const Ingresar = () => {
  useHiddenMenu(true)
  const navigate = useNavigate()

  const [usuario] = useState(getUsuarioStorage())

  const [formData, setFormData] = useState({
    agente:'',
    escritorio:''
  })

  const handleSubmit = (e:any) =>{
    e.preventDefault();
    localStorage.setItem('agente', formData.agente)
    localStorage.setItem('escritorio', formData.escritorio)
    navigate('/Escritorio')
  }
  
  const handleInputChange = (e:any) =>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value

    })
  }

  if (usuario.agente && usuario.escritorio) {
    return <Navigate to='/Escritorio'/>
  }

  return (
    <div className='mt-20 w-10/12 mt-0 m-auto' >
      <h2 className=' text-lg font-semibold mb-4 bg-orange-300 text-center rounded-lg p-1'>Administrador</h2>
      <div className="flex gap-10">
            <form onSubmit={(e) => handleSubmit(e)} className='w-full'>

              <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                  <Input
                    type="text"
                    name='agente'
                    label="Nombre de Agente"
                    value={formData.agente}
                    onChange={handleInputChange}
                    placeholder="Ingresa su nombre"
                    labelPlacement="outside"

                  />
                  <Input
                    type="number"
                    name='escritorio'
                    label="Escritorio"
                    value={formData.escritorio}
                    onChange={handleInputChange}
                    placeholder="Contraseña"
                    labelPlacement="outside"

                  />

              </div>

                <div className='mt-5 flex flex-row-reverse'>
                <Button type='submit' color="warning" variant="shadow">
                   Ingresar
                </Button>  
                </div>
            </form>
      </div>

    </div>
  )
}
