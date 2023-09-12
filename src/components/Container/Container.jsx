import React,{ useState } from "react";

const Container = (props) => {

    const [nameVal, setNameVal] = useState("");
    const [numberval, setNumberVal] = useState("");
    const [imgVal,setImgVal] = useState("")

    function nameInputChange(e){
        setNameVal(e.target.value);   
    }
    function numberInputChange(e){
        setNumberVal(e.target.value);
    }
    function imageInputChange(e){
        setImgVal(e.target.value);
    }



    const handleAdd = () => {
        if (!imgVal.trim() || nameVal.trim() || numberval.trim()) {
          alert("Input is emply!");
          return;
        }
        const contactObj ={
            img: imgVal,
            name: nameVal,
            number: numberval,
            id: Date.now()
        }
        setNameVal("");
        setNumberVal("");
        setImgVal("")
        props.handleBook(contactObj);

    }
    
    return (
        <div>
            <div className="addContact" style={{backgroundColor:"red",height: "200px", width:"200px"}}>
                <input type="text"placeholder="Image Link" onChange={imageInputChange} value={imgVal}/>
                <input type="text" placeholder='Name' onChange={nameInputChange} value={nameVal}/>
                <input type="text" placeholder='Number' onChange={numberInputChange} value={numberval}/>
                </div>
                <button onClick={handleAdd}>Add Number</button>
           </div>

    );
};

export default Container;