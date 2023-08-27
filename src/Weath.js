import React, { useState } from 'react'
import "./Weath.css"
const Weath = () => {
    const[search,setsearch]=useState("")
    const searchhandler=(e)=>{
      setsearch(e.target.value)
    }
    const dateHandler=(d)=>{
      let date=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
      let Month=["January","Februray","March","April","May","June","July","August","September","October","November","December"]
       return(<h1>
        {`${date[d.getDay()]} ${d.getDate()} ${Month[d.getMonth()]} ${d.getFullYear()}`}
       </h1>)
    }
    const[result,setresult]=useState("")
    const enterHandler=(e)=>{
      if(e.key==="Enter"){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid={api key}`)
        .then(response=>response.json())
        .then(data=>setresult(data))
        .catch(err=>console.log(err))
        setsearch("")
      }
     
    }
  return (
    <div className='secondmaindiv'>
    <div className='Thirdmaindiv'>
    <input type="text" name='innn' value={search} onChange={searchhandler} onKeyDown={enterHandler}/>
     {
      (result.main!==undefined)?(<div className='Fourthmaindiv'>
       <h1>{result.name},{result.sys.country}</h1> 
       {()=>dateHandler(new Date())}
       <div>
        {Math.round(result.main.temp)}°C
       </div>
       <h1>{result.weather[0].main}</h1>
      </div>):("")

      
     } 
    </div>
      
      
    </div>
  )
}

export default Weath

