import './App.css';
import Album from './components/Album';
import Nav from './components/Nav';

function App() {

//   const albums = 
//   [
//     {
//     name: "In Rainbows",
//     artist: "Radiohead",
//     yearOfRelease: 2007,
//     albumSales: 500000
//     },

//     {
//       name: "Titanic Rising",
//       artist: "Weyes Blood",
//       yearOfRelease: 2019,
//       albumSales: 1000000
//     },

//     {
//       name: "Without Warning",
//       artist: "Metro Boomin",
//       yearOfRelease: 2017,
//       albumSales: 750000
//     },

//     {
//       name: "Rain Dogs",
//       artist: "Tom Waits",
//       yearOfRelease: 1985,
//       albumSales: 2000000
//     },
// ]

  return (
    <div className="App main-color">
      <Nav 
        name = {"Caden"}
      />
      <Album 
        name= {"Rain Dogs"}
        artist = {"Tom Waits"}
        yearOfRelease = {1985}
        albumSales =  {2000000}
      />
      <Album 
        name= {"Without Warning"}
        artist = {"Metro Boomin"}
        yearOfRelease = {2017}
        albumSales =  {750000}
      />
      <Album 
        name= {"Titanic Rising"}
        artist = {"Weyes Blood"}
        yearOfRelease = {2019}
        albumSales =  {1000000}
      />
      <Album 
        name= {"In Rainbows"}
        artist = {"Radiohead"}
        yearOfRelease = {2007}
        albumSales =  {1500000}
      />
    </div>
  );
}

export default App;
