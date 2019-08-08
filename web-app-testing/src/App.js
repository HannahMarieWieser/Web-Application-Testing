import React, {useState} from 'react';
import './App.css';


//-[] provide a button that the person in charge can press every time there is a `strike`, `ball`, `foul` or `hit`
//-[] changes recorded on this component should update the information shown by the `Display` component.
  //aka pass info to state to be rendered in display.js


  //------------State Rules---------------


//-[] Badclick !!! a `foul` increases strikes up to 2. 
  //With no strikes, a foul makes it 1 strike. 
  //With 1 strike, a foul makes it 2 strikes. 
  //With two strikes a foul has no effect, count stays at 2 strikes.
//----------




function Dashboard(){
  const [balls, setBalls] = useState({ballCounter: 0})  //okclick 
  const [strikes, setStrikes] = useState({strikeCounter: 0}) //okclick
  const [hits, setHits] = useState({hitCounter: 0}) //hitclick //DONE
  const [fouls, setFouls] = useState({foulCounter: 0}) //badclick

  // -[] balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
  //-[] balls and strikes reset to 0 when a `hit` is recorded.
  console.log('balls', balls)
  if (balls.ballCounter === 5 || strikes.strikeCounter === 4 || hits.hitCounter === 1){
    setBalls({ballCounter: 0})
    setStrikes({strikeCounter: 0})
  }

 


  const handleHitClick = () => {
    const newHitValue = hits.hitCounter + 1
    setHits({hitCounter: newHitValue})
    console.log('hit was clicked')
  }

  const handleBallClick = () => {
    const newBallValue = balls.ballCounter + 1
    setBalls({ballCounter: newBallValue})
    console.log('Ball was clicked')
    
  }

  const handleStrikeClick = () => {
    const newStrikeValue = strikes.strikeCounter + 1
    setStrikes({strikeCounter: newStrikeValue})
    console.log('strike was clicked')
  }

  const handleBadClick = () => {
    const newFoulValue = fouls.foulCounter + 1
    setFouls({foulCounter: newFoulValue})
    console.log('foul was clicked')
  }


 return (
    <>
      <button onClick={()=>handleStrikeClick()} className='button' > Strike </button>
      <button onClick={()=>handleBallClick()} className='button'> Ball </button>
      <button onClick={()=>handleBadClick()} lassName='button'> Foul </button> 
      <button onClick={()=>handleHitClick()} className='button'> Hit </button>

      {balls.ballCounter}
      {strikes.strikeCounter}
      {fouls.foulCounter}
      {hits.hitCounter}
    
    
    
    </>
  )
  
}

function App() {
  return (
    <div className="App">
     <Dashboard/>
    </div>
  );
}

export default App;
