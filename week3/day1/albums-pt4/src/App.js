import './App.css';
import AlbumForm from './components/AlbumForm';
import {useState} from 'react'
import AlbumDisplay from './components/AlbumDisplay';

function App() {
  
  const [albumList, setAlbumList] = useState([])

  return (
    <div className="App">
      <AlbumForm albumList={albumList} setAlbumList={setAlbumList}/>
      <AlbumDisplay albumList={albumList} setAlbumList={setAlbumList}/>
    </div>
  );
}

export default App;
