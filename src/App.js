import Cards from './components/Container/Cards/Cards';
import Container from './components/Container/Container';
import React,{ useState } from "react";
function App() {
  const[image,setImage] = useState([]);
  const[contact, setContact] = useState([]);
  const[number,setNumber] = useState([]);

function handleBook(newObj){
  let newList = [...image,...contact,...number];
  newList.push(newObj);
  setImage(newList);
  setContact(newList);
  setNumber(newList);
}

  return (
    <div>
      <Container handleBook={handleBook}/>
      <Cards image={image} contact={contact} number={number}/>
    </div>
  );
}

export default App;
