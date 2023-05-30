import {Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import About from './components/About'
import Word from './components/Word';
import Form from './components/Form';
function App() {
  return (
    <div className="App">
      <h2>Routing Basics</h2>
      <Link to='/home'>Home</Link>
      <br />
      <Link to='/about'>About</Link>
      <br />
      <Link to={'/'}>Root</Link>
      <br />
      {/* <Link to='/word/yellow'>Random</Link> */}
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/word/:varString/:number' element={<Word/>}/>
      </Routes>
    </div>
  );
}

export default App;
