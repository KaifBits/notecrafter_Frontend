import React from 'react'
import { useState } from 'react';


const Recipie = ({pop}) => {
  const [text,setText]=useState("");
const[input,setInput]=useState(false);
const [title]=useState("Recipies");
const [arr,setArr]=useState(["empty"]);
const[ingarr]=useState(["gajar","halua","panner","dosa","jalebi","milk"])
const [tags,setTags]=useState([]);

function Handle(){

setArr([...arr,text]);
setInput(false);




}
function han(e){
setTags([...tags,e.target.value]);

}





  
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-50 flex justify-center items-center'>
       
     <div class=" flex h-auto flex-col justify-center  bg-gray-50 p-0 ">
     <i class="ri-close-large-line " onClick={()=>pop(false)}></i>
       <div class=" bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
         <div class="mx-auto max-w-md">
           <div class=" flex flex-col space-y-3">
           <h1 class="font-extrabold text-2xl">{title} </h1>
           <span class="space-x-3">Tags: {tags?.map((val)=>{

            
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
            
            
            
           })}</span>
          <select id="cars" class="w-40" onChange={han}>
  <option value="Easy">Easy</option>
  <option value="Medium">Medium</option>
  <option value="Hard">Hard</option>
  <option value="Dinner" selected>Dinner</option>
</select>

           </div>        <div class="divide-y divide-gray-300/50">
             <div class="space-y-2 py-8 text-base leading-7 text-gray-600">
                <p className="text-lg font-semibold">Cuisin Type:</p>
               <div class=" flex flex-wrap h-auto w-full space-x-2 space-y-1 font-bold  ">
              Ingrediants: <span class=" ml-3 border border-gray-400 w-auto pl-3 pr-3 rounded-md whitespace-nowrap text-red-900 bg-orange-400">+</span>
              { ingarr.map((val)=>{
    
                  return(
    <span class="border border-gray-400 w-auto pl-3 pr-3 rounded-md whitespace-nowrap text-red-900 bg-orange-400">{val}</span>
                  )
                })
                
                }
                </div>
                <ul className="space-y-2" >
                  <div className="text-lg font-semibold">Steps:</div>
                  { arr.map((val,key)=>{
    
                    return(
                      <>
                      <li class="flex items-start space-x-2 h-auto font-medium">
    
                      <input type="checkbox"  /><span class="break-words leading-none"> {val} </span> 
                     
                     </li>
                     
                     </>
                     
                    )
                  })
                }
                {input? <><input type="text" onChange={(e)=>{setText(e.target.value)}}/> <button onClick={()=>Handle()}>add</button></>:<></>}
    
                  </ul>
                  <span onClick={()=>{setInput(true)}}>+</span>
                <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.</p>
              </div>
              <div class="pt-8 text-base font-semibold leading-7">
                
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Recipie;