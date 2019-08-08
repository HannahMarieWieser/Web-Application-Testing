import React, {useState} from 'react';
import Display from './Components/Display'
import './App.css';


//-[] provide a button that the person in charge can press every time there is a `strike`, `ball`, `foul` or `hit`
//-[] changes recorded on this component should update the information shown by the `Display` component.
  //aka pass info to state to be rendered in display.js




function Dashboard(){
  const [balls, setBalls] = useState(0)  //okclick 
  const [strikes, setStrikes] = useState(0) //okclick
  const [hits, setHits] = useState(0) //hitclick //DONE
  const [fouls, setFouls] = useState(0) //badclick

  const scores = {balls, strikes, hits, fouls}

  //-[] balls and strikes reset to 0 when a `hit` is recorded
  const handleHitClick = () => {
    setHits(hits + 1)
    setStrikes(0)
    setBalls(0)
    console.log('hit was clicked')
  }

  // -[] balls reset to 0 when a player reaches4 balls.
  const handleBallClick = () => {
    if( balls < 4){
      setBalls(balls + 1)
    } else{
      setBalls(0)}
    console.log('Ball was clicked')
  }

  // -[] strikes reset to 0 when a player reaches 3 strikes.
  const handleStrikeClick = () => {
    if (strikes < 3) {
      setStrikes(strikes + 1);
    } else {
      setStrikes(0);}
    //const newStrikeValue = strikes.strikeCounter + 1
    console.log('strike was clicked')
  }

  //With no strikes, a foul makes it 1 strike. 
  //With 1 strike, a foul makes it 2 strikes. 
  //With two strikes a foul has no effect, count stays at 2 strikes
  const handleBadClick = () => {
    if(strikes === 0){
      setStrikes(strikes + 1)
      setFouls(fouls + 1)}
    else if(strikes === 1){
      setStrikes(strikes + 2)
      setFouls(fouls + 1)}
    else{
      setFouls(fouls + 1)}
    console.log('foul was clicked')
  }


 return (
    <>
      <button onClick={()=>handleStrikeClick()} className='button' > Strike </button>
      <button onClick={()=>handleBallClick()} className='button'> Ball </button>
      <button onClick={()=>handleBadClick()} lassName='button'> Foul </button> 
      <button onClick={()=>handleHitClick()} className='button'> Hit </button>
    
    
    </>
  )

}

function App(...scores) {
  return (
    <div className="App">
     <Dashboard />
     <Display {...scores} />
    </div>
  );
}

export default App;
