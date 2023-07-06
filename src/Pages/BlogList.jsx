import React from 'react';
import BlogItem from './BlogItem';
import '../App.css'
import { Container } from 'react-bootstrap';


const BlogList = ({ todos }) => {
  return (
    <Container>
        <div className="blog-list" >
            {todos.map((item)=>(
                <BlogItem key={item.id} item={item}/>
            ))}
    </div>
    </Container>
  )
}

export default BlogList