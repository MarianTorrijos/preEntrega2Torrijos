import { useEffect, useState } from "react"; 
import { Link , useParams} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import {
getFirestore,
getDocs,
where,
query,
collection,
snapshotEqual,
doc,
} from "firebase/firestore";
import { CartWidget } from "./CartWidget";


export const ItemListContainer = () => { 
  const [items, setItems]= useState([]);
const [loading, setLoading]= useState(true);
const {id}= useParams();

useEffect (() => {
  const db = getFirestore();

 /* const refColecction = collection(db,"items")*/

  const refColecction = !id
  ? collection(db,"items")
  : query (collection(db,"items"),where("category","==",id));


  getDocs(refColecction)
  .then((snapshot)=>{
    setItems(
      snapshot.docs.map((doc)=>{
        return{... doc.data(), id: doc.ref.id};
      })
    );
  })
   /*   new Promise((resolve, reject) => {
     setTimeout(() => resolve(data),2000);
      
    })
    .then((response) => {
      if (!id){
        setItems(response);
      } else{
      const filtered = response.filter((i) => i.category ===id);
      setItems(filtered);
      }  
      })*/
  
.finally(() => setLoading(false));
},[id]);


if (loading) return <h4>Espere</h4>;
if (items.length===0) return <h4>No hay productos</h4>;
return (
<Container className="mt-4 d-flex">

<Container className="mt-4 d-flex">
{items.map( (i) => (<Card key={i.id} style= {{ width: '18rem' }}>
    <Card.Img variant="top" src={i.imageid} />
    <Card.Body>
      <Card.Title>{i.name}</Card.Title>
      <Card.Text>{i.detail}</Card.Text>
      <Link to={`/item/${i.id}` } ><Button variant="primary">Ver</Button></Link>
    </Card.Body>
  </Card>))}
</Container>
</Container>

);

}

