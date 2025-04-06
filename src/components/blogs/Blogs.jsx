import React, { useEffect, useState } from 'react';
import Blog from '../blog/Blog';

const Blogs = ({handelBookMark, handelReadingTime}) => {

  const [blogs, setBlogs] =useState([]);


  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  
  return (
    <div>
      <h3 className='text-xl font-bold my-4'>Total Blogs: {blogs.length}</h3>
      <div className='all-blogs grid grid-cols-1 md:grid-cols-2 gap-4'>
        {
          blogs.map(blog => <Blog key={blog.id} blog={blog} handelBookMark={handelBookMark} handelReadingTime={handelReadingTime}></Blog>)
        }
      </div>
    </div>
  );
};

export default Blogs;