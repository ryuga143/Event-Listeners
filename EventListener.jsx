import React from "react";

import { useState, useEffect } from "react";

const Resize=()=>{

const   [screensize, setScreensize] =useState({

    width: window.innerWidth,
    height:window.innerHeight
})

const updatescreensize=()=>{
setScreensize({
    width: window.innerWidth,
    height:window.innerHeight})

}

useEffect(()   =>   {
    window.addEventListener('resize',updatescreensize)

    return() =>{
        window.removeEventListener('resize',updatescreensize)
    }
},[])


return(
    <div>
    <p style={{color:"red"}}>width:{screensize.width}px</p>
    <p style={{color:"red"}}>height:{screensize.height}px</p>
    
    </div>
)
}

export default Resize;