import React, {  useState } from 'react';

const EditableMenu = ({side,setside,object}) => {

  
   const[iinput,setIinput]=useState(false);
   const[input,setInput]=useState(false);
   const[text,setText]=useState("")
   const[ttext,settText]=useState("")
   const[tags,setTags]=useState([])
  
   function seting(e){
      const text=e.target.value;
      settText(text);
   
     

   }
   function han(e){
    setTags([...tags,e.target.value]);
    
    }
    function Handle(){

        object.steps.push(text);
        setInput(false);
        
        
        
        
        }

        

  return (
    

  <div class={side? ` absolute top-0 right-0 w-0  h-screen border border-gray-400 duration-500 bg-white ` :` absolute top-0 right-0 w-1/2 h-screen border border-gray-400 duration-500 p-5 bg-white `}>
    <button onClick={()=>setside(true)}><i class="ri-arrow-right-line"></i></button>

<div class="flex flex-col items-start space-y-8 space-x-3 h-auto">
<h1 class="text-4xl font-bold"> {object?.name} </h1>
<div class="flex space-x-2  w-full h-auto ">
<p class="text-gray-500 font-mono text-[16px] w-40 h-auto "><i class="ri-menu-line"></i>  Tags</p>
{object?.tags?.map((val)=>{

            
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



})}
<p class=" w-full h-auto break-words break-all">  <select id="cars" class="w-40" onChange={han} >
  <option value="Easy">Easy</option>
  <option value="Medium">Medium</option>
  <option value="Hard">Hard</option>
  <option value="Dinner" selected>Dinner</option>
</select></p>

  </div>
  <div class="flex  w-full h-auto " >
<p class="text-gray-500 font-mono text-[16px] w-40 h-auto " onClick={()=>setIinput(false)} ><i class="ri-file-list-3-line"></i> Ingrediants</p>
{iinput?
<input class=" w-full h-auto break-words break-all" placeholder='list down your ingredients by adding(,)' value={ttext} onChange={(e)=>seting(e)}  />:<div class=" w-full h-auto break-words space-x-2 break-all" value="ujujsjhk jgdh jhdg hjcekw wkjcdh " onClick={()=>setIinput(true)} >{object?.ingrediants?.map((val)=>{
    
    return(
<span class="border border-gray-400 w-auto pl-3 pr-3 rounded-md whitespace-nowrap  bg-pink-100 text-black">{val}</span>
    )
  })}</div>





}
  </div>
    <div class="flex  w-full h-auto ">
<p class="text-gray-500 font-mono text-[16px] w-40 h-auto "><i class="ri-menu-add-line"></i> Cuisin</p>
<p class=" w-full h-auto break-words break-all"> Dosa, jalebi, sweets</p>

  </div>
  <div class="flex  w-full h-auto ">
<p class="text-gray-500 font-mono text-[16px] w-40 h-auto "><i class="ri-chat-forward-fill"></i>Steps</p>
<p class=" w-full h-auto break-words overflow-wrap "> 

<ul className="space-y-2" >
                 
                  { object.steps?.map((val,key)=>{
    
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
</p>

  </div>

  </div>


  <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>

    </div>


  
  )
}

export default EditableMenu;