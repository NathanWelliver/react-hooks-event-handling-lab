// Code Keypad Component Here

function Keypad (){

    function logging(){
        console.log('Entering password...')
    }

    return (
        <div>
            <input type="password" onChange={logging}/>
        </div>
    )
}

export default Keypad;