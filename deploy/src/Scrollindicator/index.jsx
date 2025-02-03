import { useEffect } from "react";
import { useState } from "react";



export  default function  Scrollbar({url}){




const  [    data ,SetData   ]   =  useState ([]);
const  [    loding , setLoding  ]   =   useState(false);
const  [    error , setErrormessage ]   =   useState(" ");


async function  fefetchData(geturl){
try{

    setLoding(true);
    const respone = await fetch (geturl);
    const data=  respone.json;

    if(data && data.products )

console.log(data);



}




catch(e){
setErrormessage(e.message);

}






}



useEffect(()=>{    
fefetchData(url);
},[url])





return(
    <div>
    </div>
);




useEffect(()=>{


console.Consolelog(" do the fuction here ")
},[])



};