import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BlogList from './BlogList';

const HomePage = () => {
    const [todos,setTodos]  =useState([]);

    async function getTodos(){
        const {data} = await axios('https://jsonplaceholder.typicode.com/posts')
        setTodos(data)
    }

    useEffect(() => {
        getTodos();
    }, [])


  return <BlogList todos={todos} />

}

export default HomePage