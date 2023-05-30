import './App.css';
import Person from './components/Person';
function App() {
  return (
    <div className="App">
    <Person 
      fullName = {"Doe, Jane"}
      age = {45}
      hairColor = {"Black"}
      />
      <Person 
      fullName = {"Smith, John"}
      age = {88}
      hairColor = {"Brown"}
      />
      <Person 
      fullName = {"Fillmore, Millard"}
      age = {50}
      hairColor = {"Blonde"}
      />
    </div>
  );
}

export default App;
