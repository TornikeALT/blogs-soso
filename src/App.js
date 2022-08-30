import NavBar from './components/NavBar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import BlogList from './components/BlogList';
import NewBlog from './components/NewBlog';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Home />} path="/home" />
          <Route element={<NewBlog />} path="/newblog" />
          <Route element={<BlogDetails />} path="/blogs/:id" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
