import { useEffect, useState } from "react"; 
import { Link , useParams} from "react-router-dom";

import Container from "react-bootstrap/Container";
import data from "../data/productos.json";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


console.log(data);

export const ItemListContainer = () => { 
const [items, setItems]= useState([]);
const [loading, setLoading]= useState(true);
const {id}= useParams();

useEffect (() => {
    new Promise((resolve, reject) => {
     setTimeout(() => resolve(data),2000);
      
    })
    .then((response) => {
      if (!id){
        setItems(response);
      } else{
      const filtered = response.filter((i) => i.category ===id);
      setItems(filtered);
      }  
      })
    .finally(() => setLoading(false));
},[id]);
if (loading) return <h4>Espere</h4>;
if (items.length===0) return <h4>No hay productos</h4>;
return (
<Container className="mt-4 d-flex">
<h1>Productos</h1>
<Container className="mt-4 d-flex">
{items.map( (i) => (<Card key={i.id} style= {{ width: '18rem' }}>
    <Card.Img variant="top" src={i.img} />
    <Card.Body>
      <Card.Title>{i.nombre}</Card.Title>
      <Card.Text>{i.detalle}</Card.Text>
      <Link to={`/item/${i.id}` } ><Button variant="primary">Ver</Button></Link>
    </Card.Body>
  </Card>))}
</Container>
</Container>

);

}