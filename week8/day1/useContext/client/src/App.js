import logo from './logo.svg';
import './App.css';
import { UserProvider } from './context/userContext';
import UserForm from './components/UserForm';
import DisplayTodos from './components/DisplayTodos';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <UserForm/>
        <DisplayTodos/>
      </UserProvider>
    </div>
  );
}

export default App;
