import React, { useEffect, useState } from 'react';
import img from "./utils/img.png";
import axios from 'axios';

const MovieList = () => {
  const [movieData, setMovieData] = useState(null);
  const[uploaddata,setuploaddata]=useState(null);
  const[refresh,setrefresh]=useState(false);
  const name=localStorage.getItem("username")



  useEffect(()=>{
    
async function f() {
  try{
  const p = await axios.get(`https://note-backend-dusky.vercel.app/movies/${name}`);
  console.log(p.data);
  setMovieData(p.data);
  }
  catch(err){
    console.log("errs is",err);
  }
}
    f()



  },[name,refresh])
  async function handlesubmit() {
    
    const p = await axios.post(`https://note-backend-dusky.vercel.app/movie/upload/${name}`, uploaddata);
    console.log(p);
    setrefresh(!refresh);
    
  }

  const getImdbIdFromUrl = (url) => {
    const regex = /(?:imdb\.com\/title\/)(tt\d+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const fetchMovieData = async (imdbId) => {
    const apiKey = '77bc6094'; // OMDb API key
    const url = `https://www.omdbapi.com/?i=${imdbId}&apikey=${apiKey}`;
  
    try {
      const response = await fetch(url);
  
      // Check if the response is OK (status in the range 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      // Check if the response contains valid data
      if (data.Response === "True") {
        return {
          imdbId: imdbId,
          title: data.Title || "No title available",
          poster: data.Poster && data.Poster !== "N/A" ? data.Poster : null,
          plot: data.Plot && data.Plot !== "N/A" ? data.Plot : "No description available",
          watched:false
        };
      } else {
        throw new Error(`Movie not found: ${data.Error}`);
      }
    } catch (error) {
      console.error('Error fetching movie data:', error.message);
      return null;
    }
  };
  
  const handleInputChange = async (e) => {
    const url = e.target.value;
    const imdbId = getImdbIdFromUrl(url);

    if (imdbId) {
      try{
      const data = await fetchMovieData(imdbId);
      console.log("data is",data);
      setuploaddata(data);
     

      
      }
      catch(err){
        console.log("err is",err);
      }
    }
  };
  async function handlewatched(e){
    const p = await axios.post(`https://note-backend-dusky.vercel.app/movies/${e.target.id}`, );
    console.log(p)
    setrefresh(!refresh);

  }

  return (
    <>
    
    <div className='flex flex-col justify-center items-center '>
      <div className='w-full h-16 md:h-60 bg-pink-600'></div>
      <img src={img} className="absolute size-8 md:size-36 left-10 top-10 md:left-40 md:top-52 " alt="Movie Background" />
      <div className='w-full h-full'>
        <h1 className='flex items-end justify-center font-bold text-xl md:text-4xl md:h-44 md:w-80 ml-16 mb-11'>
          Movies List
        </h1>
      </div>
      <div className='flex gap-x-8   items-center w-1/2 md:w-11/12 h-full'>
        <div className=' w-2/4 h-screen'>
          <h1 className='font-semibold text-xs md:text-2xl   '>Want to Watch</h1>
          <input
            type="text"
            placeholder="Paste IMDb movie link here..."
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 w-full mt-2"
          /><button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handlesubmit}>add</button>
         { uploaddata?  <div className=" flex mt-4 h-44  ">
 <div>
 <h2 className="font-semibold text-xl">{uploaddata.title}</h2>
 <p className="text-gray-700 text-lg mt-2">{uploaddata.plot}</p>
 
 </div>
 {uploaddata.poster && <img src={uploaddata.poster} alt={uploaddata.title} className="w-28 h-44 ml-2 object-contain bg-red-500" />}
</div>:<></>}
          
{movieData?.map((val)=>{
          if(!val.watched){
            return(
              <div className=" flex mt-4 h-auto   ">
              <div>
                <button class="text-white bg-orange-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" id={val._id} onClick={(e)=>handlewatched(e)}>watched</button>
              <h2 className="font-semibold text-xl">{val.title}</h2>
              <p className="text-gray-700 text-lg mt-2">{val.plot}</p>
              </div>
              {val.poster && <img src={val.poster} alt={val.title} className="w-32 h-44 ml-2 object-cover " />}
             </div>
            )
          }
          else{
            return <></>
          }
 
          }) 
           
          }
        </div>
      <div className=' w-2/4 h-screen'>
        <h1 className='font-semibold text-xs md:text-2xl w-full  '>Watched</h1>
        {movieData?.map((val)=>{
          if(val.watched){
            return(
              <div className=" flex mt-4 h-auto space-x-20    ">
              <div className='h-auto w-2/3 '>
              <h2 className="font-semibold text-xl">{val.title}</h2>
              <p className="text-gray-700 text-sm md:text-lg mt-2 h-auto  w-full  break-words">{val.plot}</p>
              </div>
              {val.poster && <img src={val.poster} alt={val.title} className="w-32 h-44 ml-2 object-cover " />}
             </div>
            )
          }
          else{
            return <></>
          }
 
          }) 
           
          }

        </div>
      </div>
    </div>
    </>
  );
};

export default MovieList;
