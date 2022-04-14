import React, { useState } from 'react'
import {usestate, useEffect} from 'react'
import WeatherItem from './Weather';



function App() {
    const [time, setTime] = useState(newDate().tolocaleString())
    const [adress, setAddress] = useState('Ha Noi')
    const [bg, setBg] = useState('https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.openweathermap.org%2Fdata%2F2.5%2Fweather%3Fq%3DHanoi%26appid%3D8d484d5d7bcce56b92573204d8f12c49%26fbclid%3DIwAR2Ff7AAcHaYDpI36f4aJXWEfupxoDke8DNb9K4FA7il0DnqarLQgIgHLOA&h=AT2FYxhXpInDrItu2mckMVlE4WbgJ0TvM0Vd4UByYB7PXi2u0iETBP5en6VKgWs2dRan8vaQO2I-ikPEGEElWd2Plio6VsHCKOGd_r0wDZmckgXBIdrGtb1VURN8U4olWoC_DROt7RLnyjABNv9f7g')

    useEffect(() => {
        setTimeout(() => {
            setTime(new Date().toDateString())
        },900)
    },[time])
    useEffect(() => {
        temp < 33 ? setBg('https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.openweathermap.org%2Fdata%2F2.5%2Fweather%3Fq%3DHanoi%26appid%3D8d484d5d7bcce56b92573204d8f12c49%26fbclid%3DIwAR2Ff7AAcHaYDpI36f4aJXWEfupxoDke8DNb9K4FA7il0DnqarLQgIgHLOA&h=AT2FYxhXpInDrItu2mckMVlE4WbgJ0TvM0Vd4UByYB7PXi2u0iETBP5en6VKgWs2dRan8vaQO2I-ikPEGEElWd2Plio6VsHCKOGd_r0wDZmckgXBIdrGtb1VURN8U4olWoC_DROt7RLnyjABNv9f7g') : setBg('https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.openweathermap.org%2Fdata%2F2.5%2Fweather%3Fq%3DHanoi%26appid%3D8d484d5d7bcce56b92573204d8f12c49%26fbclid%3DIwAR2Ff7AAcHaYDpI36f4aJXWEfupxoDke8DNb9K4FA7il0DnqarLQgIgHLOA&h=AT2FYxhXpInDrItu2mckMVlE4WbgJ0TvM0Vd4UByYB7PXi2u0iETBP5en6VKgWs2dRan8vaQO2I-ikPEGEElWd2Plio6VsHCKOGd_r0wDZmckgXBIdrGtb1VURN8U4olWoC_DROt7RLnyjABNv9f7g')
    },[temp])
     useEffect(() => {
         fetch('https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.openweathermap.org%2Fdata%2F2.5%2Fweather%3Fq%3DHanoi%26appid%3D8d484d5d7bcce56b92573204d8f12c49%26fbclid%3DIwAR2Ff7AAcHaYDpI36f4aJXWEfupxoDke8DNb9K4FA7il0DnqarLQgIgHLOA&h=AT2FYxhXpInDrItu2mckMVlE4WbgJ0TvM0Vd4UByYB7PXi2u0iETBP5en6VKgWs2dRan8vaQO2I-ikPEGEElWd2Plio6VsHCKOGd_r0wDZmckgXBIdrGtb1VURN8U4olWoC_DROt7RLnyjABNv9f7g')
         .then(res => res.json())
         .then(data => {
             setAddress(data.name)
         })
     
},[search])
return (
    <div className='App'>
    <div className="weather">
      if(e.code === 'Enter') setSearch(e.target.value.trim())
      
    </div>
    </div>
);
}
export default App;