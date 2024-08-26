import { useContext, useEffect, useState } from "react"; 
import {   useParams} from "react-router-dom";
import {  getFirestore, getDoc, doc,snapshotEqual, count} from "firebase/firestore";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import { ItemsContext } from "./itemsContext";
import { ItemCount } from "./itemCount";



export const ItemDetailContainer = () => { 
const [item, setItem]= useState([]);
const [loading, setLoading]= useState(true);
const {id}=  useParams();

const { addItem } = useContext(ItemsContext);

const onAdd = (count)=> {
 addItem({ ...item, quantity: count });
};
  //{alert(count);}


useEffect (() => {
  const db= getFirestore();

  const refDoc = doc(db, "items", id);

  getDoc(refDoc)
  .then((snapshot)=> { 
    setItem(
      { id: snapshot.id, ...snapshot.data() } );
  
  })
  .finally(() => setLoading(false));
},[id]);

if (loading) return "espere..";
return (
  /*
<Container className="mt-4 d-flex">
<h1>Productos</h1>
<h2>{item.id} </h2>
<h2>{item.name} </h2>
<h3>{item.precio} </h3>
<Card.Img variant="top" src={item.imageid} />
</Container>
*/
<Container className="mt-4 d-flex">
<Card key={item.id} style= {{ width: '30rem' }}>
<Card.Img variant="top" src={item.imageid} />
    <Card.Body>
      <Card.Title>{item.name} </Card.Title>
      <Card.Text>{item.detail}</Card.Text>
      <Card.Text>{item.precio}</Card.Text>
      <ItemCount stock= {item.stock} onAdd={onAdd}/>
    </Card.Body>
    </Card>
</Container>

);

}
