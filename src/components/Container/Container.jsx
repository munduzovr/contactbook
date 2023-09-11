const Container = (props) => {
    return (
        <div>
            <div className="addContact" style={{backgroundColor:"red",height: "200px", width:"200px"}}>
                <input type="text" placeholder='Name' onChange={props.nameInputChange} val={props.obj.nameVal}/>
                <input type="text" placeholder='Number' onChange={props.numberInputChange} val2={props.obj.numberval}/>
                </div>
                <button >Add Number</button>
           </div>

    );
};

export default Container;