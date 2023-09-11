import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink,Navigate } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button
} from "@nextui-org/react";
import { Ingresar } from './Ingresar';
import { Cola } from './Cola';
import { CrearTicketrs } from './CrearTicketrs';
import { Escritorio } from './Escritorio';
import { UIContext } from '../context/UIContext';

export const RoutesPage = () => {
  const {ocultarMenu} = useContext(UIContext)
  const activeStyle = { color: "#f5a524" }; 

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Router >
      <Navbar disableAnimation isBordered className={`${ocultarMenu ? 'flex' : 'hidden'}`} >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand>
            <NavLink 
              to='/' 
             style={({isActive})=>isActive ? activeStyle : undefined}
            >
              <p className="font-bold text-inherit">ACME</p>
            </NavLink>
          </NavbarBrand>
          <NavbarItem>
            <NavLink style={({isActive})=>isActive ? activeStyle : undefined} to='/Ingresar'>
              Ingresar
            </NavLink>
          </NavbarItem>
          <NavbarItem >
            <NavLink style={({isActive})=>isActive ? activeStyle : undefined} to='Cola' >
              Cola
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink style={({isActive})=>isActive ? activeStyle : undefined} color="foreground" to='/Tickets'>
              Crear Tickest
            </NavLink>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="warning" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <Routes>
        <Route path='/Ingresar' element={<Ingresar/>} />
        <Route path='/Cola' element={<Cola/>} />
        <Route path='/Tickets' element={<CrearTicketrs/>} />
        <Route path='/Escritorio' element={<Escritorio/>} />
        <Route path='/*' element={<Navigate to='/Ingresar'/>} />
      </Routes>
    </Router>
  );
};