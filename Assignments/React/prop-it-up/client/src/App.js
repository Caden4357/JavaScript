import './App.css';
import Person from './components/Person';

function App() {
  const users = 
[
    {
      name: "Doe, Jane",
      age: 45,
      hairColor:"Black"
    },
    {
      name: "Smith, John",
      age: 88,
      hairColor:"Brown"
    },
    {
      name: "Fillmore, Millard",
      age: 50,
      hairColor:"Blonde"
    },
    {
      name: "Smith, Maria",
      age: 62,
      hairColor:"Red"
    }

]

  return (
    <div className="App">
      <Person users = {users}/>
    </div>
  );
}

export default App;
