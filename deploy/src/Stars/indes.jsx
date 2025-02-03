// import { useState } from 'react';
// import {FaStar} from 'react-icons/Fa'
// import './Style.css'





// export default function Stars( { numofstars=5}){

// const [rating , setRating]=useState(0);
// const [hover , setHover]=useState(0);




// function handeleclick(getcurrentindex){

//     setRating(getcurrentindex);
// }

// function mouseenter(getcurrentindex){

//     setHover(getcurrentindex);

// }
// function mouseleave(getcurrentindex){
//     setHover(rating);


// }








// return  ( <div className="Stars">

//     {
//         [...Array(numofstars)].map((_,index) => {
//             index += 1



//         return <FaStar
//         key={index}
//         onclick={()=>handeleclick( index )}
//         onmouseover={()=>mouseenter(index)}
//         onmouseLeave={()=>mouseleave(index)}
//     size={40}

        
//         />
//     }

//     )
//     }



//     </div>
// );
// } 