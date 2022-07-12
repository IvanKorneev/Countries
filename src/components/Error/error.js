import React from "react";
import './error.css'

const Error = () => {

    return (
        <div className='error'>
            <h1 className='global-title'>OOPS!</h1>
            <p>Page not found crying face emoji </p>
            <img
                src='https://www.garageclothing.com/on/demandware.static/-/Library-Sites-global_library_ca/default/dw209f52f1/Icons-Garage/crying_emoji.png' alt='img'/>
            <p>Come back later or go to our homepage to find what you're looking for.</p>
        </div>
    )
}

export default Error;