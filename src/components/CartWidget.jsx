import { Link } from "react-router-dom";
import changuito from "../assets/carrito.png";

export const CartWidget = () =>  {
return (
    <Link to= "/cart">
    <img src={ changuito } height={40}/>
    
    </Link>
);

};
  