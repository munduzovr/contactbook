import React from 'react';

const Container = () => {
    let createContact = ()=>{

    }
    return (
        <div>
            <div className="addContact">
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Number'/>
                <button>Add Number</button>
            </div>

            <div className="contacts">
            <img src="" alt="icon" />
            <p>Name</p>
            </div>
        </div>
    );
};

export default Container;