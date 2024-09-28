import React, { useEffect } from 'react';
import { useState} from 'react';


import EditableMenu from './EditableMenu';
import InsertMenu from './InsertMenu';


const RecipieTable = () => {
    const popup=true;

    const[recipiesarr,setRecipiearr]=useState(null);
    const[sidebar,setSidebar]=useState(true);
    const[lsidebar,setLSidebar]=useState(true);
    const[obj,setobj]=useState({})
    const[refresh,setRefresh]=useState(true);
    
 console.log("side bar gere", sidebar)
  
    



    useEffect(()=>{
      const name=localStorage.getItem("username");
    async function callapi(){
    const p=await fetch(`https://note-backend-dusky.vercel.app/menu/${name}`);
    const data=await p.json();
    console.log(data);
    setRecipiearr(data);
    


    }
callapi();

    },[refresh])



    function handleSidebar(e){
     const id=e.target.id;
     async function call(id){
      const p=await fetch(`https://note-backend-dusky.vercel.app/user/${id}`);
      const data=await p.json();
      setobj(data);
      setSidebar(false)
      console.log(data);
    
      
  
  
      }
  call(id);


    }
  return (
    <div class="flex items-center justify-center ">
    
    
    
      
    <div class="flex flex-col items-center justify-center space-y-6 w-full h-auto   "  >
    
      
    
      <div class="bg-amber-700 w-full h-60"></div>
      {/* <img src={img} class="absolute size-36 left-40 top-52  "/> */}

   
     <div className=" space-x-2">
      {/* <span className="ml-5">add row</span> */}
      {/* <i class="ri-edit-fill"></i> */}
      <h1 className=' flex items-center justify-center font-bold text-4xl h-24 w-full mt-4 '>Recipies 🍽</h1>
      <div className='flex justify-center items-center text-lg font-bold text-gray-500'>“I feel a recipe is only a theme which an intelligent cook can play each time with a variation.” — Madam Benoit</div>
      <button type="submit" className=" bg-red-300 hover:bg-pink-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm text-black px-5 py-2.5 me-2 mb-2 dark:bg-pink-400 dark:hover:bg-pink-700 focus:outline-none dark:focus:ring-blue-800"  onClick={()=>setLSidebar(false)}> + add recipie</button>
    <table class="border border-gray-400 m-8  ">
    { recipiesarr?.length? <thead class="border border-gray-300">
        <th class="border border-gray-300  font-semibold text-amber-950">As Name <i class="ri-pencil-line" onClick={()=>setLSidebar(false)}></i></th> 
         <th class="border border-gray-300 font-semibold text-amber-950">Tags <i class="ri-menu-line"></i></th>
         <th class="border border-gray-300 font-semibold text-amber-950">Cuisin <i class="ri-menu-add-line"></i></th>
         <th class="border border-gray-300 font-semibold text-amber-950">Ingrediants <i class="ri-file-list-3-line"></i></th>
        </thead> :<><div>NO Recipies available</div> </>
      
}
        <tbody>
          { recipiesarr?.map((val)=>{

return (

  <>
  <tr>
    <td class="border border-gray-300 w-96 h-auto p-4 break-words overflow-wrap break-word font-semibold space-x-3">
    
    <span>{val?.name}</span>
    
    
    {/* <i class="ri-eye-line ml-5" onClick={()=>setPopup(true)} ref={ref}></i> */}
    <i class="ri-eye-line ml-5" id={val._id} onClick={(e)=>handleSidebar(e)}></i> </td>
    
    <td class="border border-gray-300 w-96 h-auto p-4 break-words overflow-wrap break-word space-x-3">{val?.tags?.map((val)=>{

            
if(val==="Dinner"){
return <span className="border border-black rounded-lg w-auto bg-gray-400 p-1">Dinner</span>
}
else if(val==="Easy"){
  return <span className="border border-black rounded-lg w-auto bg-green-400 p-1">Easy</span>
}
else if(val==="Medium"){
  return <span className="border border-black rounded-lg w-auto bg-yellow-400 p-1">Medium</span>
}
else{
  return <span className="border border-black rounded-lg w-auto bg-red-400 p-1">Hard</span>
}



})} </td>
    <td class="border border-gray-300 w-96 h-auto p-4 break-words overflow-wrap break-word font-semibold">{val?.cuisin} </td>
    <td class="border border-gray-300 w-96 h-auto p-4 break-words overflow-wrap break-word font-semibold space-x-2 space-y-2">{val?.ingrediants?.map((v)=>{

return <span class="border border-gray-400 w-auto pl-3 pr-3 rounded-md  inline-block whitespace-normal  text-red-900 bg-red-300">{v}</span>
    })}</td>
    
          </tr>
  </>
)

          })
          
}
          
          
       
    
    
          </tbody>
    
      </table>
      </div>
      { popup?
      <>
     
   
    </>:<></>
    }
      </div>
      
    
   <EditableMenu  side={sidebar} setside={setSidebar} object={obj}/>
   <InsertMenu side={lsidebar} setside={setLSidebar} refresh={refresh} setRefresh={setRefresh}  />
    
  
    </div>
  )
}

export default RecipieTable