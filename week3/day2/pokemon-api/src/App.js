import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';

function App() {

  const [pokeList, setPokeList] = useState([])
  const [poke, setPoke] = useState({})

  const [input, setInput] = useState("")


  // * Can start with this useEffect call first then show how to do it with a button

  // useEffect(()=>{
  //   axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
  //       .then(response=>{
  //         setPokeList(response.data.results)
  //         console.log(response.data.results);
  //       })
  //       .catch(err => console.log(err))
  //   }, []);
  
  const onChangeHandler = (e) => {
    setInput(e.target.value)
  }

  const generatePokeList = async() => {
    try{
      const results = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
      console.log(results.data);
      setPokeList(results.data.results)
    }
    catch(error){
      console.log("##########", error.message);
    }
  }

    // * Making a useEffect to run when the input changes (This is just a bonus if there is extra time to show how you to use useEffect with things in the dependency array)

  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`)
        .then(response=>{
          setPoke(response.data)
          console.log(response.data);
        })
        .catch(err => console.log(err))
    }, [input]);


  return (
    <div className="App">
      {
        pokeList?
        pokeList.map((poke,idx) => (
          <div key={idx}>
            {poke.name}
          </div>
        )):
        null
      }
      <button onClick={generatePokeList}>Get 20 Pokemon</button>

      <form>
        <label htmlFor="pokeName">Search for a pokemon by name: </label>
        <input type="text" name="pokeName" onChange={onChangeHandler}/>
      </form>
      {
        poke.name?
        <div>
          <p>You searched for: {poke.name}</p>
          <img src={poke.sprites.front_shiny} alt="" />
        </div>:
        null

      }
    </div>
  );
}

export default App;
