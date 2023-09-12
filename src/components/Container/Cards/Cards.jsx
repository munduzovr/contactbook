import React from 'react';

const Cards = ({image,contact,number}) => {
    console.log(image);
    return (
        <div className="contacts">
        <h2>Contact</h2>
        <ul>
            
            { image.map((item)=>(
                    <li key={item.id}>
                        <img src={item.imgVal} alt="" />
                        <p src={contact.nameVal}></p>
                        <p src={number.nameVal}></p>
                    </li>
                ))}
        </ul>

        </div>
    );
};

export default Cards;