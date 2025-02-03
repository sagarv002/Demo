
import { useState } from "react";
import QRCode from "react-qr-code";

export default function Qrcode_scanner(){



    const [qrcode,setqrcode]  = useState("");
    const [input ,setinput]  =  useState("");


    function handelchange(){

        setqrcode(input)
        setinput("")

    } 



    return(


<div>
   
    <h1> Qr Code Scanner </h1>
    
    
    <div><input 
    
    
    onchange ={(e)=>setinput(e.target.value)}  
    type = " text"
    name = " qr-code " 
    
    placeholder=" Enter you value here " />
    <button onClick={()=>handelchange()}> Generate  </button>
    
    </div>
    

<div>


    
     <QRCode

id="qr-code-id"
value={qrcode}
size={400}


/></div>

</div>


    );
}