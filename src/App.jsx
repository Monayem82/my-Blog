import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      

      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Blogs></Blogs>
        </div>
        <div className="right-container 2-[30%]">
          <h1>Reading Time :0</h1>
          <h1>Bookmarked Time :0</h1>
        </div>
      </div>

    </>
  )
}

export default App
