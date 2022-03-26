import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

const games = ['Poker', 'Black Jack', 'Chess', 'Tetris'];

function App() {
  return (<>
    <Counter start={10}/>
    <Counter start={20}/>
    <Counter start={-1}/>

    <ButtonGroup names={games}/>
    </> 

  );
}

function ButtonGroup(props){
  //logic to set the state of the children should be in the parent function
  const [selected, setSelected] = useState('Poker');

  const updateSelected = (name) => setSelected(name); //with more checks here

  return (
    <div>
      {props.names.map(n => <SimpleButton key={n} name={n} chosen={n===selected}
        updateSelected={updateSelected} />)}
    </div>
  );
}

function SimpleButton(props){
  if(props.chosen)
    return (<button>**{props.name}**</button>)
  else
    return(<button onClick={() => props.updateSelected(props.name)}>{props.name}</button>);
    //children has to ask the parent to modify its state
}

function Counter(props){
  const [count, setCount] = useState(props.start);

  const increaseSlow = () => {
    setTimeout(() => {setCount((oldCount)=>oldCount+1)}, 500);
  }

  return(
    // setCount(count+1) --> NOT OKAY bc it depends on the old value of the state --> CALLBACK
    <p>{count} 
      <button onClick={increaseSlow}>+</button> 
      <button onClick={()=>{setCount((oldCount)=>oldCount-1)}}>-</button> 
      <button onClick={() => {setCount(props.start)}}>X</button>
    </p>
  );
}

export default App;
