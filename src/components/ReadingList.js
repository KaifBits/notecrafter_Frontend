import React from 'react';
import { useState,useRef,useEffect } from 'react';
import img from "./utils/read.png";
import RightslideBook from './RightslideBook';

const ReadingList = () => {
  const [popup,setPopup]=useState(false);

    const[bookarr,setBookarr]=useState(null);
    const[sidebar,setSidebar]=useState(true);
    const[lsidebar,setLSidebar]=useState(true);
    const[obj,setobj]=useState({})
    const[refresh,setRefresh]=useState(true);
    
 console.log("side bar gere", sidebar)
  
    const ref=useRef(null);



    useEffect(()=>{
      const name=localStorage.getItem("username");
    async function callapi(){
    const p=await fetch(`https://note-backend-g5waba8w5-rank-boards-projects.vercel.app/book/${name}`);
    if(p){
      const data=await p.json();
      console.log(data);
      setBookarr(data);
    }

  
    


    }
callapi();

    },[refresh])



 
  return (
    <div> <div className='w-full h-60 bg-cyan-200'></div>
      <img src={img} className="absolute size-36 left-40 top-44 " alt="Movie Background" />
      
      <div className='w-full h-full'>
        <div className='flex items-end justify-center font-bold text-4xl h-44 w-80 ml-16 mb-6 '>
          Reading List
        </div>
      <div className=' h-auto w-1/2 ml-16 mb-11 pl-12 text-lg font-bold text-gray-500 '>
      📚 The modern day reading list includes more than just books. We've created a dashboard to help you track books, articles, podcasts, and videos. Each media type has its own view based on the Type property.
      </div>
      <button type="submit" className=" ml-28 bg-red-300 hover:bg-pink-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm text-black px-5 py-2.5 me-2 mb-2 dark:bg-pink-400 dark:hover:bg-pink-700 focus:outline-none dark:focus:ring-blue-800"  onClick={()=>setLSidebar(false)}> + add book</button>
    <table class="border border-black ml-24  pl-12  ">
    { bookarr?.length? <thead class="border border-gray-300">
        <th class="border border-gray-300  font-semibold text-amber-950">As Name <i class="ri-pencil-line" ></i></th> 
         <th class="border border-gray-300 font-semibold text-amber-950">Types<i class="ri-menu-line"></i></th>
         <th class="border border-gray-300 font-semibold text-amber-950">Status <i class="ri-menu-add-line"></i></th>
         <th class="border border-gray-300 font-semibold text-amber-950">Author <i class="ri-file-list-3-line"></i></th>
         <th class="border border-gray-300 font-semibold text-amber-950">Page <i class="ri-file-list-3-line"></i></th>
        </thead> :<><div>NO Recipies available</div> </>
      
}
        <tbody>
          { bookarr?.map((val)=>{

return (

  <>
  <tr>
    <td class="border border-gray-300 w-72 h-auto p-4 break-words overflow-wrap break-word font-semibold space-x-3">
    
    <span>{val?.name}</span>
    
    
    {/* <i class="ri-eye-line ml-5" onClick={()=>setPopup(true)} ref={ref}></i> */}
    <i class="ri-eye-line ml-5" id={val._id} ></i> </td>
    
    <td class="border border-gray-300 w-72 h-auto p-4 break-words overflow-wrap break-word space-x-3">

            

 <span className="border border-black rounded-lg w-auto bg-cyan-500 p-1">{val.types}</span>





 </td>
    <td class="border border-gray-300 w-72 h-auto p-4 break-words overflow-wrap break-word font-semibold">{val?.status} </td>
    <td class="border border-gray-300 w-72 h-auto p-4 break-words overflow-wrap break-word font-semibold space-x-2 space-y-2"> <span class="border border-gray-400 w-auto pl-3 pr-3 rounded-md  inline-block whitespace-normal  text-black bg-amber-600">{val.author}</span>
  </td>
    <td class="border border-gray-300 w-72 h-auto p-4 break-words overflow-wrap break-word font-semibold">{val?.page} </td>
    
          </tr>
  </>
)

          })
          
}
          
          
       
    
    
          </tbody>
    
      </table>
      </div>
      <RightslideBook side={lsidebar} setside={setLSidebar} refresh={refresh} setRefresh={setRefresh}/>
      </div>
  )
}

export default ReadingList;