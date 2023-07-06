import axios from 'axios';
import React, { useEffect, useState } from 'react'


const LinkPage = () => {
    const [link,setLink] =useState([])

    async function getLink(){
        const {data} = await axios('https://jsonplaceholder.typicode.com/posts')
        setLink(data);
    }
    useEffect(()=>{
        getLink();
    },[])

  return (
      <>
   <h2>link List</h2>
   {link.map((item)=>(
    <p key={item.id}>{item.name}</p>  
    ))}
    </>
)}

export default LinkPage

