import React from "react";
import { Link } from "react-router-dom";
const Home=()=>{




    return (
        <>
     <div class="flex flex-col items-center space-y-4 px-20">
     <img src="https://www.notion.so/images/page-cover/met_horace_pippin.jpg" class=" w-full h-80 object-cover"/>
       
       <img src="https://pxraja.com/wp-content/uploads/2024/06/aesthetic-dp-43.webp" class="absolute w-40 h-40 left-40 top-52 rounded-full"/>
       <h1 class=" flex items-center justify-center font-extrabold text-4xl">
     Personal Home
     </h1>
       <span class="text-gray-400">Organize everything in your life in one place.</span>
       <div class="flex justify-center items-center">
        <div>
       <div class="flex space-x-72 items-center justify-center bg-slate-100  w-auto">
     <h3 class=" pl-5 text-2xl underline underline-offset-8 pb-6 font-bold ">
       Daily
      
     </h3>
     <h3 class="text-2xl underline underline-offset-8 pb-6 font-bold">
       Life 
     </h3>
    
    
         </div>
         <div class="pl-44 pr-28 flex space-x-60">
         <ul class=" font-semibold ml-2 justify-center space-y-3  w-28">
          <li > <Link to="/movies"> 👩🏻‍💻Movie List  </Link></li>
            <li><Link to="/recipietable"> 🍗Recipies  </Link></li>
             <li><Link to="/readinglist"> 📖Reading List </Link></li>
    
           </ul>
           <ul class=" font-semibold  w-28 space-y-3 ">
       <li> <Link to="/yearlyplans" >📍Yearly plans </Link> </li>
            <li>🗺️Travel Goals</li>
             <li>📌TODO-List</li>
    
           </ul>
          </div>
        
       </div>
        
         </div>
         </div>
        </>
    )
}
export default Home;