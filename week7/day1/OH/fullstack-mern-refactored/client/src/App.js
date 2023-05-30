import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios'
import AllAlbums from './componets/AllAlbums'
import Nav from './componets/Nav';
import AlbumForm from './componets/AlbumForm';
import { Routes, Route } from 'react-router-dom';
import ShowOneAlbum from './componets/ShowOneAlbum';
import Edit from './componets/Edit';
import Create from './componets/Create';


function App() {
  const [allAlbums, setAllAlbums] = useState([])

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<AllAlbums allAlbums={allAlbums} setAllAlbums={setAllAlbums} />}/>
        <Route path='/newAlbum'element={<Create setAllAlbums={setAllAlbums}/>} />
        <Route path='/oneAlbum/:id' element={<ShowOneAlbum allAlbums={allAlbums} setAllAlbums={setAllAlbums} />}/>
        <Route path='/editAlbum/:id' element={<Edit/>}/>
        {/* <Route path='/' element={[
            <AlbumForm key={1} setAllAlbums={setAllAlbums}/>,
            <AllAlbums key={2} allAlbums={allAlbums} setAllAlbums={setAllAlbums}/>
        ]}/> */}

      </Routes>
    </div>
  );
}

export default App;
