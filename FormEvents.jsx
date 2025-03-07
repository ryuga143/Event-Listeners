import React, { useState } from "react";



const Input = () => {
const [userName, setuserName]=useState( )

const updateInput=( event)=>{
    setuserName(event.target.value)
}

    return (
        <section className='top' >
        <div className="inputtext">
            <input type="text" placeholder="Enter your text" onChange={updateInput} />
            <br />
            <button>Submit</button>
            <p> {userName} </p>
        </div>
        </section>

    );
}

export default Input;