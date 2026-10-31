import { Route, Routes } from 'react-router-dom'
import './App.css'
import Blog from './pages/Blogs'
import AddBlog from './pages/AddBlog'
import HomePage from './pages/HomePage'
import Header from './components/Header'
import Footer from './components/Footer'
import { previos_blogs } from './data/blog'
import { useState } from 'react'


function App() {


  const [blogs, setBlogs] = useState(previos_blogs)
  
    const addblog = (newBlogData) => {
      setBlogs([newBlogData, ...blogs])
    }

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blogs" element={<Blog blogs={blogs}/>} />
      <Route path="/add-blog" element={<AddBlog addblog={addblog}/>} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
