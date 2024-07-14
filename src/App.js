import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import EditPost from './EditPost.js'
import About from './About.js'
import Missing from './Missing'
import {Route,Routes} from 'react-router-dom'
import { DataProvider } from './context/DataContext.js'
const App = () => {
    return (
    <div className='App'>
      <Header/>
      <DataProvider>
      <Navbar/>
      <Routes>
        <Route index path="/" element={<Home/>} />
        <Route index path="/post" element={<NewPost/>} />
        <Route path="/edit/:id" element={<EditPost/>} />
        <Route path="/post/:id" element={<PostPage/>} />
        <Route path="about" element={<About/>}/>
        <Route path="*" element={<Missing/>}/>
      </Routes>
      </DataProvider>
      <Footer/>
    </div>
  )
}

export default App
