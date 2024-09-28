import React, { useState } from 'react';
import {Link } from 'react-router-dom';
import axios  from 'axios';

const Singup = () => {
   const[data,setData]=useState({
     
       username:"",
       email:"",
       password:"",
       recipie:[] , //this should be empty
       movies:[] ,
       books:[],
       plans:[]  //this should be empty

   });

   const [warning,setWarning]=useState("");
   const[special,setSpecial]=useState("");
   const hanldeEvenet=(e)=>{

      const newData={...data};

      


      newData[e.target.id]=e.target.value;

      if(newData.password.length<8 && !/[@#$%&]/.test(newData.password)){
          setWarning("paassword should be more than 8 character");
          setSpecial("must contain special character(@ # $ % &)");
      }
      else if(newData.password.length >=8 && !/[@#$%&]/.test(newData.password)){
        setWarning("");
      }
      else if(/[@#$%&]/.test(newData.password) && newData.password.length<8){
        setSpecial("");
      }
      else{
        setWarning("");
        setSpecial("");
      }
      setData(newData);
      console.log(newData);


   }
   const handleSubmit = (e) => {
    e.preventDefault();
    if(data.password.length>8 && /[@#$%&]/.test(data.password) && data.email.length!==0){
    axios.post('https://note-backend-g5waba8w5-rank-boards-projects.vercel.app/register', data)
      .then(response => {
        console.log('Form submitted successfully:');
      })
      .catch(error => {
        console.error('There was an error submitting the form:', error);
      });
    }
    else{
        console.log("not submitted");
    }
  };



  return (
    <div className='flex'>
    <section className="bg-purple-200 w-2/3">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link to="#" class="flex items-center mb-6 text-2xl font-semibold text-black dark:text-white">
            
            NoteCrafter    
        </Link>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign Up to your account
                </h1>
                <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Your Name</label>
                        <input type="text" name="username" id="username" onChange={hanldeEvenet} class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="sk kaif rahaman" required=""/>
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Your email</label>
                        <input type="email" name="email" id="email" onChange={hanldeEvenet}  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                    </div>

                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Your Password</label>
                        <input type="password" name="password" id="password" onChange={hanldeEvenet}  placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                    <div className='text-red-500'>{warning}</div>
                    <span className='text-red-500'>{special}</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-start">
                            
                            
                        </div>
                        
                    </div>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign Up</button>
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                        have an account yet? <a href="/" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>
    <img src="https://i.pinimg.com/564x/9a/12/31/9a12316963fd1e10b1b3679ad5d2f2cf.jpg" className='w-1/2 h-full  bg-slate-400' />
    </div>
  )
}

export default Singup;