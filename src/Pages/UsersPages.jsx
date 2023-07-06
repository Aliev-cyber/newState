import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UsersPage = () => {
    const [users,setUsers] =useState([])

    async function getUsers(){
        const {data} = await axios('https://jsonplaceholder.typicode.com/posts')
        setUsers(data);
    }
    useEffect(()=>{
        getUsers();
    },[])

  return (
      <>
   <h2>Users List</h2>
   {users.map((item)=>(
    <p key={item.id}>{item.name}</p>  
    ))}
    </>
)}

export default UsersPage

