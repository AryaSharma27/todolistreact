// import { useState } from 'react'

// const App = () =>{
//   const[time,settime]=useState(new Date().toLocaleTimeString());
  
//   setInterval(()=>{
//     settime(new Date().toLocaleTimeString());
    
//   },1000);
//   // console.log(time);
//   return(
//     <div>
//       <h1 className='text-center mt-10 text-5xl'>{time}</h1>
//     </div>
//   );
// };
//-------------------------------------------------------------------------------------------
// import React, { useState } from 'react';

//   const App=() =>{
//     const submithandler = (e) => {
//       e.preventDefault();
//       const{username,firstname,lastname,contact,email}=e.target;
//       const user ={
//         username:username.value,
//         firstname:firstname.value,
//         lastname:lastname.value,
//         email:email.value

//       };
//       console.log(user);
//     };
//     return(
//       <div className='p-3 rounded  w-[80%] mx-auto mt-10 bg-zinc-300'>
//         <form onSubmit={submithandler}>
//           <input type="text" name='username' placeholder='username'/>
//           <input type="text" name='firstname' placeholder='firstname'/>
//           <input type="text" name='lastname' placeholder='lastname'/>
//           <input type="text" name='email' placeholder='email'/>
//           <button>submit</button>
//         </form>
//       </div>
//     )
//   };

// export default App;
//----------------------------------------------------------------------------------------

// import React from 'react'

// const App = () => {
  
  
  
  
//   return (
//     <div className='w-[80%] mt-10 mx-auto p-5  rounded bg-zinc-300'>
//       <form onChange={SubmitHandler}>
//         <input type="text" />
//       </form>
//     </div>
//   )
// }

// export default App


// import {useform} from "react-hook-form";
// const App =() =>{
//   const{
//     register,
//     handlesubmit,
//     formState:{errors},
//   }=useform();

//   const SubmitHandler=(data)=>{
//     console.log(data);
//     console.log('submitted');

//   };
//   console.log(errors)

//   return(
//     <>
//     <h1 className="mt-10 text-center mb-5">register form</h1>
//     <form onSubmit={handlesubmit(SubmitHandler)}></form>
//     </>
   
//   )
// }

// --------------------------------------------------------------------------------

// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <h1>this is homepage</h1>
//       <child1 title="this is information about child1" about="hello" /> 
//       <child2 title="this is information about child2"  /> 
//     </div>
//   )
// }

// export default App

// /----------------------------------------------------------------------------

import { useState } from "react";
import "remixicon/fonts/remixicon.css";

import Create from "./components/Create";
import Header from "./components/Header";
import Show from "./components/Show";

const App = () => {
    // temperory db
    const [tasks, settasks] = useState([]);

    return (
        <div className=" border-t-2 w-screen h-screen bg-zinc-800 flex  items-center flex-col">
            <Header tasks={tasks} />
            <Create tasks={tasks} settasks={settasks} />
            <Show tasks={tasks} settasks={settasks} />
        </div>
    );
};

export default App;