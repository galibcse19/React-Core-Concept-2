 import './App.css'
 import Counter from './Counter';
 import Users from './Users';

function App() {

  function handelClick(){
    alert('clicked Button');
  }

  const button2=()=>{
    alert("button 2 clicker");
  }

  function button4(num){
    alert(num+5);
  }

  return (
    <>
      <h3>Vite + React</h3> 
      <Users></Users>
      <Counter></Counter>
      <button onClick={handelClick}>Click Me!</button>
      <button onClick={button2}>Button 2</button>
      <button onClick={()=>{alert('clicked 2rd button')}}>Button-3</button>
      <button onClick={()=>{button4(5)}}>Button-4</button>
    </>
  )
}

export default App
