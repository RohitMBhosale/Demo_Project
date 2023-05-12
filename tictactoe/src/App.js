import TicTacToe from './Atom/tictac';
import React,{useState,useEffect} from 'react';
import './App.css';

const initialState = ["" ,"", "", "", "", "", "","", ""]

function App() {

const [gameState, updateGameState]  = useState(initialState)
const [ Xchance, updateXchance] = useState(false)


const onSingleSquareClicked = (index) =>{
const strings = Array.from(gameState);
strings[index] = Xchance? "X" : "O";
updateGameState(strings);
updateXchance(!Xchance);
       
}
useEffect(() =>{

const winner = checkWinner( gameState ) ;
if(winner){
 alert(`and the winner is ${winner}`)
 updateGameState(initialState);
}

},[gameState])

function checkWinner() {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      return gameState[a];
    }
  }
  return null;
}



  return (
    <div className="App">

   <p className="para-section"> Tic Tac Toe </p>
    
     <div className="sections">
     <TicTacToe className="border-btm-right" state={gameState[0]}  onClick={()=>onSingleSquareClicked(0)}/>
     <TicTacToe className="border-btm-right" state={gameState[1]} onClick={()=>onSingleSquareClicked(1)}/>
     <TicTacToe className="border-btm" state={gameState[2]} onClick={()=>onSingleSquareClicked(2)}/>
     </div>
      
     <div className="sections">
     <TicTacToe  className="border-btm-right"  state={gameState[3]} onClick={()=>onSingleSquareClicked(3)}/>
     <TicTacToe  className="border-btm-right"  state={gameState[4]} onClick={()=>onSingleSquareClicked(4)}/>
     <TicTacToe className="border-btm"  state={gameState[5]} onClick={()=>onSingleSquareClicked(5)}/>
     </div>

     <div className="sections">
      <TicTacToe className="border-right"  state={gameState[6]} onClick={()=>onSingleSquareClicked(6)}/>
      <TicTacToe className="border-right"  state={gameState[7]} onClick={()=>onSingleSquareClicked(7)}/>
      <TicTacToe  state={gameState[8]} onClick={()=>onSingleSquareClicked(8)}/> 
     </div>

<button className="btn"  onClick={() =>updateGameState(initialState)}> start Again </button>
    </div>
  );
}

export default App;
