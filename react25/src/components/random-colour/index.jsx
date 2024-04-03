import { useState } from "react"

export default function RandomColour() {

const [typeOfColor,setTypeOfColor] = useState('hex');
const [color,setColor] = useState('#00000000')


function RandomColourUtility(length){
    return Math.floor(Math.random()*length)
}

function handleCreateRandomColor(length){
    const hex =[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let hexColor = '#';

    for(let i=0;i<6;i++){
        hexColor += '#';
    }
}

function handleCreateRandomRgbColor(){

}

    return (
        <div style={{
            width: '100vw',
            height: "100vh",
            background : color,
        }}>
            <button onClick={()=>setTypeOfColor('hex')}>Create Hex Colour</button>
            <button onClick={()=>setTypeOfColor('hex')}>RGB colour</button>
            <button onClick={typeOfColor === 'hex' ?  handleCreateRandomColor : handleCreateRandomRgbColor}>Generate random colour</button>
        </div>
    )
        
    
}