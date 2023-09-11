import React from 'react';

const Cards = (props) => {
    //console.log(props)
    return (
        <div className="contacts">
        <img src="" alt="icon" />
        <p>{props.contactObj.name}</p>
        <p>{props.contactObj.number}</p>
        </div>
    );
};

export default Cards;