import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

import { NavLink } from "react-router-dom";
import { CartWidget } from "./CartWidget";

export const NavBar = () => 
<>
<Navbar bg="dark" data-bs-theme="dark">
<Container>
   <Nav className="me-auto"> 
    <Nav.Link as={ NavLink } to= "/">Inicio</Nav.Link>
    <Nav.Link as={ NavLink } to= "/category/alimentos"> Alimentos</Nav.Link>
    <Nav.Link as={ NavLink } to= "/category/bebidas"> Bebidas</Nav.Link>
   </Nav> 
</Container>
</Navbar>
  
</>;
