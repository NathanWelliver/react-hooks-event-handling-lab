// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe(){

    function good(){
        console.log('Good!')
    }

    function hey(){
        console.log('Hey! Eyes on me!')
    }

    return (
        <div>
            <button onFocus={good} onBlur={hey}>'Eyes on me'</button>
        </div>
    )
}

export default EyesOnMe;