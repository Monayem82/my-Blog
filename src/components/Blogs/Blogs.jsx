import React, {  useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs,setBlogs]=useState([])

    useEffect(()=>{

        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))

    },[])

    console.log(blogs)

    return (
        <div>
            <h1 className='text-3xl'>Totall :{blogs.length}</h1>
            <div className='grid grid-cols-2 gap-4'>
                {
                    blogs.map((blog,id)=><Blog key={id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;