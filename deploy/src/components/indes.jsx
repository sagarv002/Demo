import React from "react"

import { useState } from "react"
import data from "./data";
import  "./style.css";






export default function Expdata() {



    const[state, setState ] = useState(null);
    const[ enabel, setEnabel ] = useState(false);
    const[setmul,setMultiple]=useState([]);




   function s_selection(id) {

   setState(id === state ? null : id ) ;

   };




    function Handelmulsec(id){
    let cpysetmul=[...setmul] ;
    const findindes= cpysetmul.indexOf(id);

    if(findindes===-1)cpysetmul.push(id)
    else cpysetmul.splice(findindes,1)
   
   };





    return (
        <>
            <div className=" wrapper class">
                <button onClick={()=> setEnabel(!enabel)  }> Reload </button>
                <div className=" main component " >


                    {

                        data.map((x) => <div className=" id">
                            <div className=" title" onClick={()=>enabel? ()=> Handelmulsec(x.id): s_selection(x.id)}>
                            <h1>{x.Title}</h1>
                            <span> + </span>
                                
                               
                            </div>


{


state === x.id ||setmul.indexOf(x.id) !== -1 ?
    <div className=" txtfeild "> 

    {x.answer}

    </div>

   : null


}





                        </div>
                        
                        
                        )

                    }


                </div>
            </div>
        </>

    );


};


