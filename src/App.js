import './App.css';
import TodoBar from './components/TodoBar';
import React, {useState} from 'react'
import TodoLists from './components/TodoLists';
import Completed from './components/Completed';


function App() {

  // this is for tasks left
  const [todoVals, setTodoVal] = useState([])
  // this is for tasks completed
  const [compActs, setcompActs] = useState([])

  // function to add value to todoVals
  const getVal = () => {
    // this is used to by pass duplicate entries
    let trigger = true
    todoVals.forEach((val) =>{
      if(document.getElementById("todoText").value === val){
        trigger = false
      }
    })
    // will add entry if trigger is true
    if(trigger){
      setTodoVal([...todoVals, document.getElementById("todoText").value])
    }
    
  }
  // function to remove value from todoVals
  const removeVal = (itemVal) => {
    let x = todoVals.filter((val) => !(val === itemVal))
    setTodoVal(x)
  }
  // function to add value to compActs
  const completeAct = (itemVal) =>{
    // dont use this because it will push will return a number of total added values
    // which will set compActs as an integer value
    // setcompActs(compActs.push(itemVal))
    let x = compActs
    x.push(itemVal)
    setcompActs(x)
    removeVal(itemVal)
  }

  return (
    <div className="App">
      <div>
        <TodoBar func = {getVal}></TodoBar>
        {/* break */}
        <div className='listCon'>
          <h1 className="hero todo">Tasks Left</h1>
          {todoVals.map((value, index) =>{
            return <TodoLists val={value} key={index} func={removeVal} func2={completeAct}></TodoLists>
          })}
        </div>
        {/* break */}
        <div className="listCon">
          <h1 className="hero completed">Tasks Completed</h1>
          {compActs.map((CA, index) =>{
            return <Completed title={CA} key={index}></Completed>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
