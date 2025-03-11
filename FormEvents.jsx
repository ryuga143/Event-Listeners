import React, { useState } from "react";



const Input = () => {
const [userName, setuserName]=useState( '')
const [show, setshow]=useState( )

const details =( changes)=>{
    setuserName(changes.target.value)
}

const Onclick=()=>{
setshow(userName)
}

    return (
        <section className='top' >
            
        <div className="inputtext">
            <h1>{show}</h1>
            <input type="text" placeholder="Enter your text" onChange={details}/>
            <br />
            <button className="Submitbtn" onClick={ Onclick}>Submit</button >
            
        </div>

        </section>
        

    );
}

export default Input;