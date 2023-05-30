import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'
import DisplayAllAlbums from './components/DisplayAllAlbums';
import {Routes, Route} from 'react-router-dom'
import Nav from './components/Nav';
import AlbumForm from './components/AlbumForm';
import OneAlbum from './components/OneAlbum';
import Edit from './components/Edit';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import {UserProvider} from './context/UserContext'

function App() {
  const [allAlbums, setAllAlbums] = useState([])
  return (
    <div className="App">
      <Nav/>
      <UserProvider>
        <Routes>
            <Route path='/' element={<Register/>}/>
            <Route path='/login' element={<Login/> }/> 
            <Route path='/dashboard' element={<DisplayAllAlbums allAlbums={allAlbums} setAllAlbums={setAllAlbums}/>}/>
            <Route path='/newAlbum/form' element={<AlbumForm allAlbums={allAlbums} setAllAlbums={setAllAlbums}/>}/>
            <Route path='/oneAlbum/:id' element={<OneAlbum/>}/>
            <Route path='/editAlbum/:id' element={<Edit/>}/>
            <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
