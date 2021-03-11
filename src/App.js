import './App.css';
import TodoBar from './components/TodoBar';
import React, {useState} from 'react'
import TodoLists from './components/TodoLists';

function App() {

  const [todoVals, setTodoVal] = useState([])

  const getVal = () => {
    let trigger = true
    todoVals.forEach((val) =>{
      if(document.getElementById("todoText").value === val){
        trigger = false
      }
    })
    if(trigger){
      setTodoVal([...todoVals, document.getElementById("todoText").value])
    }
    
    }
  const removeVal = (itemVal) => {
    console.log("time to remove value: " + itemVal)
    let x = todoVals.filter((val) => !(val === itemVal))
    setTodoVal(x)
  }

  return (
    <div className="App">
      <TodoBar func = {getVal}></TodoBar>
      {todoVals.map((value, index) =>{
        return <TodoLists val={value} key={index} func={removeVal}></TodoLists>
      })}
    </div>
  );
}

export default App;
