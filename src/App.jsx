
import { useState } from 'react';
import './App.css'
import Blogs from './components/blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  // bookmark
  const [books, setBooks] = useState([]); 

  // reading time
  const [readingTime, setReadingTime] = useState(0);

  const handelBookMark = (blog) => {
    const newBook = [...books, blog];
    setBooks(newBook);
    
  }

  
  const handelReadingTime = (time, id) => {
    const newReadingTime = readingTime + parseInt(time);
    setReadingTime(newReadingTime);
    removeItem(id);
  }

  // remove item from bookmark
  const removeItem = (id) => {
    const remaining = books.filter(book => book.id !== id);
    setBooks(remaining);
  }
  

  return (
    <>
     
      <div className='w-[90%] mx-auto'>
        <Navbar></Navbar>

        <div className='main-container flex text-center'>

          <div className='left-container w-[70%] p-4'>
          <Blogs handelBookMark={handelBookMark} handelReadingTime={handelReadingTime}>the blog</Blogs>
          </div>

          <div className='right-container w-[30%]'>
            <h3>Reading Time: {readingTime}</h3>
            <h3>Bookmarked Count: {books.length}</h3>
            <div className='text-left mt-4 p-4 grid gap-3 border-t-2 border-amber-400'>
              {
                books.map(book => <p className='p-2 border-dashed border-2 border-b-cyan-400 border-r-cyan-400 rounded-xl' key={book.id}>{book.title} <br></br> <span className='text-sm text-blue-900'>{new Date().toLocaleString()}</span></p>)
              }
            </div>
            
          </div>

        </div>
      </div>
      
    </>
  )
}

export default App
