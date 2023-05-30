import './App.css';
import Home from './components/Home';
import {Routes, Route, Link} from 'react-router-dom'
import SignIn from './components/SignIn';
import Nav from './components/Nav';
import NewAlbum from './components/NewAlbum';
import { useState } from 'react';

function App() {
  const [albumList, setAlbumList] = useState([])
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/dashboard' element={<Home/>}/>
        <Route path='/newAlbum' element={<NewAlbum albumList={albumList} setAlbumList={setAlbumList}/>}/>
      </Routes>
    </div>
  );
}
export default App;
