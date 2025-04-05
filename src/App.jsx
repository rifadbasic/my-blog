
import './App.css'
import Blogs from './components/blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
     
      <Navbar></Navbar>

      <div className='main-container flex text-center'>

        <div className='left-container w-[70%]'>
        <Blogs>the blog</Blogs>
        </div>

        <div className='right-container w-[30%]'>
          selected Blogs
        </div>
        
      </div>
      
    </>
  )
}

export default App
