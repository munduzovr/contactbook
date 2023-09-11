import Cards from './components/Container/Cards/Cards';
import Container from './components/Container/Container';
import React,{ useState } from "react";
function App() {
  
  const [nameVal, setNameVal] = useState("");
  const [numberval, setNumberVal] = useState("");

  let contactObj ={
    name: nameVal,
    number: numberval
}

  function nameInputChange(e){
          setNameVal(e.target.value);
          
  }
  function numberInputChange(e){
      setNumberVal(e.target.value);
      
  }
  console.log(contactObj)
  return (
    <div>
      <Container nameInputChange={nameInputChange} numberInputChange={numberInputChange} obj={contactObj}/>
      <Cards contactObj={contactObj}/>
    </div>
  );
}

export default App;
