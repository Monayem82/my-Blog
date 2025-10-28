import {  useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  const [bookMarked,setBookmarked]=useState([])
  const [readTime,setReadTime]=useState(0)

  const handleBookmark=(blog)=>{
    if(bookMarked.find(b=>b.id===blog.id)){
      alert('This blog is already bookmarked')
    }
    else{
      const newBookmarked=[...bookMarked,blog]
      setBookmarked(newBookmarked)
    }
  }

  const handleRemoveBookmard=(blogId)=>{
    const remaining=bookMarked.filter(b=>b.id!==blogId)
    setBookmarked(remaining)
  }

  const handleMarkAsReadTime=(time,id)=>{
    console.log(typeof(time))
    const newReadTime=readTime+Number(time)
    setReadTime(newReadTime)
    handleRemoveMarkasRaed(id)

  }
  const handleRemoveMarkasRaed=(id)=>{
    const remaining=bookMarked.filter(r=>r.id!==id)
    setBookmarked(remaining)
  }

  return (
    <>
      <Navbar></Navbar>
      

      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Blogs handleBookmark={handleBookmark} handleMarkAsReadTime={handleMarkAsReadTime}></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <h1>Reading Time :{readTime}</h1>
          <h1>Bookmarked : {bookMarked.length}</h1>
          <div>
            {
              bookMarked.map((blog,id)=>
              <div key={id} className="card w-96 bg-base-100 card-md shadow-sm">
                <div className="card-body">
                  <h2 className="card-title">{blog.title}</h2>
                  <h4>by {blog.author}</h4>
                  <p>read time {blog.reading_time}</p>
                  <div className="justify-end card-actions">
                    <button onClick={()=>handleRemoveBookmard(blog.id)} className="btn btn-primary">Remove</button>
                  </div>
                </div>
              </div>
              )
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default App
