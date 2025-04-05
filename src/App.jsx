
import './App.css'
import Blogs from './components/blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
     
      <div className='w-[90%] mx-auto'>
        <Navbar></Navbar>

        <div className='main-container flex text-center'>

          <div className='left-container w-[70%]'>
          <Blogs>the blog</Blogs>
          </div>

          <div className='right-container w-[30%]'>
            <h3>Reading Time: 0</h3>
            <h3>Bookmarked Count: 0</h3>
          </div>

        </div>
      </div>
      
    </>
  )
}

export default App
