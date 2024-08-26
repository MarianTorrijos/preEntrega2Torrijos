import Container from "react-bootstrap/Container";
import { useContext, useState } from "react";
import { ItemsContext } from "./itemsContext";
import {addDoc,collection, getFirestore } from "firebase/firestore";
import Button from 'react-bootstrap/Button';



const initialValues = {
    phone: "",
    email: "",
    name: ""
};

export const Cart = ()=> {
   const [buyer, setBuyer] = useState(initialValues);
   const {items, reset} = useContext(ItemsContext);
   const total = items.reduce((acc,act) => acc  + act.precio  * act.quantity, 0);

   const handleChange = (ev) => {
    setBuyer((prev) => {
        return {...prev, [ev.target.name]: ev.target.value};
    });
   };

   const handleOrder = () => {
    const order = {
        buyer,
        items,
        total,
    };
   

   const db  = getFirestore();
   const orderCollection = collection (db, "orders");

   addDoc(orderCollection, order).then(({id})  => setOrderId(id));
   alert("Su orden ha sido completada! ");
   reset();
   setBuyer(initialValues);

};

if (!items.length) return "El carrito se encuentra vacio!";
   return (
     <Container>
        <Button onClick={reset}>Vaciar</Button>
        {items.map((i) => {
            return (
                <div key={i.id} >
                    <h4>{i.name} </h4>
                    <h5> Precio Unitario: $ {i.precio} </h5>
                    <h5> Cantidad: {i.quantity} </h5>
                    <img serc={i.imageId} height= {20} />
                </div>
            );
        })}
        
        <h4> Total: $ {total} </h4>
        <hr />
        {!!items.length && (
            <form>
            <div>
                <label>Nombre</label>
                <input value= {buyer.name} onChange={handleChange} name="name"/>
            </div>
            <div>
                <label>Email</label>
                <input value= {buyer.email} onChange={handleChange} name="email"/>
            </div>
            <div>
                <label>Telefono</label>
                <input value= {buyer.phone} onChange={handleChange} name="phone"/>
            </div>
             <Button onClick={handleOrder}>Comprar</Button>
            </form>
        )}
        
         </Container>
   );
};