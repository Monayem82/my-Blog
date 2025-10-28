import React from 'react';

const Blog = ({blog}) => {
    const {cover}=blog;
    return (
        <div>
            <img src={cover} alt="" />
        </div>
    );
};

export default Blog;