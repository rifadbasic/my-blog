import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handelBookMark, handelReadingTime}) => {
  const {id, title, author, details, cover_img, author_img, hashtag, reading_time} = blog;
  return (
    <div className='text-left'>
      <div className="card bg-base-100 max-h-[500px] shadow-sm">
        <figure>
          <img className='h-[200px] w-full'
            src={cover_img}
            alt="Shoes" />
        </figure>
        <div className="card-body">
        <div className='flex gap-4 items-center text-left'>
        <img className='w-[50px] h-[50px] rounded-full' src={author_img} alt="" />
        <p className='text-[18px] font-bold'>{author}</p>
        </div>
          <h2 className="card-title text-lg">{title}</h2>
          
          <p>{details}</p>
          <div>
            {
              hashtag.map((tag, index) => <span key={index} className='text-info mr-2'>#{tag}</span>)
            }
          </div>
          <div className="card-actions justify-around mt-4">
            <button className="btn" onClick={() => handelBookMark(blog)}><FaBookmark  />Bookmark</button>
            <button className="btn btn-primary" onClick={() => handelReadingTime(reading_time,id)}>Mark as Read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;