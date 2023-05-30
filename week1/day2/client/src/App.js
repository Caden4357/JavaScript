import './App.css';
import TodoList from './components/TodoList';
import Person from './components/Person'
import Nav from './components/Nav';

function App() {


  return (
    <div className="App">
      <Nav name={"Caden"}/>
      <TodoList todo={"Learn React"}/>
      <TodoList todo={"Take guitar lessons"}/>
      <TodoList todo={"Black belt MERN"}/>
      <TodoList todo={"Buy that new car"}/>
      <TodoList todo={"Workout 30 min"}/>
    </div>
  );
}

export default App;
