import React from 'react'

export default function Tick() {
   
    let greet;
    if(new Date().toLocaleTimeString() < "15:00"){
        greet = (
            <span>Bonjour !</span>
        )
    }else{
        greet = (
            <span>Bonsoir !</span>
        )
    }
    return (
        <div>
            {greet}
        </div>
    )
}


