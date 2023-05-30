import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Form from './components/Form';

function App() {
  const [recordList, setRecordList] = useState([])
  return (
    <div className="App">
      <Form recordList = {recordList} setRecordList = {setRecordList} />
      {
        recordList.map((record, id) => (
            <Display key = {id} recordList = {recordList} setRecordList = {setRecordList} record = {record} id = {record.id} recordsSold = {record.recordsSold}/>
          ))
      }
    </div>
  );
}

export default App;
