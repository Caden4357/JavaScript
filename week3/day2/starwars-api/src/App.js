import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';

function App() {

  const [people,setPeople] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [next, setNext] = useState('')

  // useEffect(() => {
  //   axios.get('https://swapi.dev/api/people')
  //     .then((res) => {
  //       console.log(res.data.results);
  //       setPeople(res.data.results)
  //     })
  //     .catch(err => console.log(err))
  // }, []);

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   axios.get(`https://swapi.dev/api/people/?search=${searchInput}`)
  //     .then((response) => {
  //       console.log(response);
  //       setPeople(response.data.results)
  //       setNext(response.data.next)
  //     })
  //     .catch(err => console.log(err))
  // }

  const submitHandler = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.get(`https://swapi.dev/api/people/?search=${searchInput}`)
      console.log(response);
      setPeople(response.data.results)
      setNext(response.data.next)
    }
    catch (err) {
      console.log(err);
    }
  }

  const getMore = async () => {
    try{
      const response = await axios.get(next);
      response.data.results.forEach((person) => {
        setPeople(prevState => [...prevState, person])
      })
    }
    catch (err) {
      console.log(err);
    }
  }

  // const getMore = () => {
  //   axios.get(next)
  //     .then((res) => {
  //       console.log(res);
  //       setNext(res.data.next)
  //       res.data.results.forEach((person) => {
  //         setPeople(prevState => [...prevState, person])
  //       })
  //     })
  // }

  return (
    <div className="App">
      <h1>Beep Boop Beep Beep Bop 🤓</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="search">Search for characters: </label>
        <input type="text" name="search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
      </form>
      {
        people.length > 0 ?
        people.map((person, idx) => (
          <div key={idx}>
            <p>Name: {person.name}</p>
          </div>
        )):
        null
      }
      <button onClick={getMore}>Get more</button>
    </div>
  );
}

export default App;
