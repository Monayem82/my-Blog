import React from 'react';
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({blog,handleBookmark,handleMarkAsReadTime}) => {
    const [status,setStatus]=React.useState(false);

    const handleAnother=()=>{
        setStatus(true);
    }
    const {id,cover,author,author_img,hashtags,posted_date,reading_time,title}=blog;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                    src={cover}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="author flex justify-evenly content-center gap-4">
                        <h3>{author}</h3>
                        <img className='w-16 rounded-full' src={author_img} alt="" />
                        {
                            status ? <FaBookmark onClick={()=>{handleBookmark(blog);handleAnother();}} size={25} className='hover:bg-sky-700'/> : <FaRegBookmark onClick={()=>{handleBookmark(blog);handleAnother();}} size={25} className='hover:bg-sky-700'/>
                        }
                    </div>
                    <h2 className="card-title">{id} {title}</h2>
                    <p>Posted Date :{posted_date} read time:{reading_time}</p>
                    
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="hashtags">
                        {
                            hashtags.map((hashtag,id)=><span key={id} className='mr-2 text-blue-500'>#{hashtag}</span>)
                        }
                    </div>
                    <div className="card-actions justify-end">
                    <button onClick={()=>{handleMarkAsReadTime(reading_time,id);}} className="btn btn-primary">Mark as Read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;