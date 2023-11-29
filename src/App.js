
import './App.css';
import './Assets/Style.css'
import Dash from './Components/Dash';
import Login from './Components/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signup from './Components/Signup';

import Blog from './Components/Blog';
import Blogfrist from './Components/Blogfrist';
import Blogsecond from './Components/Blogsecond';
import Blogthird from './Components/Blogthird';
import Blogfour from './Components/Blogfour';
import Blogfive from './Components/Blogfive';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'  exact element={<Login />}></Route>
          <Route path='/dashboard' element={<Dash />}></Route>
          <Route path='/register' element ={<Signup />}></Route>
          
          <Route path='/blog/0'  element ={<Blog />}></Route>
          <Route path='/blog/2'  element ={<Blogfrist />}></Route>
          <Route path='/blog/3'  element ={<Blogsecond />}></Route>
          <Route path='/blog/1'  element ={<Blogthird />}></Route>
          <Route path='/blog/4'  element ={<Blogfour />}></Route>
          <Route path='/blog/5'  element ={<Blogfive />}></Route>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
