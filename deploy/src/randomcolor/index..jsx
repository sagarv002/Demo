import { useState } from "react";




export default function Randomselector() {


    const [typecolor,settypecolor]=useState('hex');
    const [color,setcolor]=useState("");

    function randomutility(lenght){ 
        
        return Math.floor(Math.random()*lenght)}



    function handelrandomhex(){
const hex=[1,2,3,4,5,6,7,8,9,"A",'B','C','D','E','F'];
let hexcolor= '#';
for(let i=0;i<6;i++){
   

hexcolor += hex[randomutility(hex.length)];
setcolor(hexcolor);

}

};



function handelrandomrgb(){

    
const r = randomutility(250);
const g = randomutility(250);
const b = randomutility(250);

setcolor('rgb${r},${g},${b}');


};
    return (<div className="Contents"
    style={{
        width: '100vw',
        height: '100hv',
        background: 'color',
     } }>
        <button onClick={()=>settypecolor('hex ')}> Generate HEX color </button>
        <button onClick={()=>settypecolor('rgb')}> Generate RGB color </button>
        <button onClick={()=> typecolor =='hex'?handelrandomhex():handelrandomrgb()}> Generate Random color </button>
<div style={{


backgroundColor : 'blue  '


}}> 



</div>
    </div>);
}