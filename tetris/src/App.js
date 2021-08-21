import React,{useEffect,useState} from 'react';
import Board from './components/board/board.js';
import './App.css';

function App() {
  const firstBoard = [
    [{Color:"1",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"1",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
  ]
  const newBoard = [
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
  ]
  const pieces = [
    [
      // dot
      [["1"]],
      [["1"]],
      [["1"]],
      [["1"]]
    ],
    [     
      // two qube line 
      [["1","1"]],
      [["1"],["1"]],
      [["1","1"]],
      [["1"],["1"]],
    ],
    [
      // two qube qube
      [["1","1"],["1","1"]],
      [["1","1"],["1","1"]],
      [["1","1"],["1","1"]],
      [["1","1"],["1","1"]]
    ],
    [
      // four qube line
      [["1","1","1","1"]],
      [["1"],["1"],["1"],["1"]],
      [["1","1","1","1"]],
      [["1"],["1"],["1"],["1"]],
    ],
    [
      // Pyramid
      [["0","1","0"],["1","1","1"]],
      [["1"],["0","1","1"],["1"]],
      [["1","1","1"],["0","1","0"]],
      [["1"],["1","1","0"],["1"]]
    ],
    [
      // L
      [["1"],["1"],["1"],["1","1","0"]],
      [["1","0","0","0"],["1","1","1","1"]],
      [["0","1","1"],["1"],["1"],["1"]],
      [["1"],["1"],["1"],["0","1","1"]]
    ],
    [
      [["0","1","1"],["0","0","0","1","1"]],
      [["1"],[,"0","1","1"],["0","0","1"]],
      [["0","1","1"],["1","1","0"]],
      [["1"],[,"0","1","1"],["0","0","1"]]
    ]
  ];
  const [board,setBoard] = useState(firstBoard)
  const [score,setScore] = useState(0);
  const [piece,setPiece] = useState(null);
  const [nextPiece,setNextPiece] = useState(null);
  const [Hscore,setHScore] = useState(0);
  const [start,setStart] = useState(false);
  const [startCount,setStartCount] = useState(5);
  useEffect(()=>{
   
    if(start && startCount>=0)
    {
     if(startCount===5)
      setBoard(newBoard);
      setTimeout(()=>{
        let newcount = startCount -1;
        setStartCount(newcount);
        setNextPiece(pieces[Math.floor(Math.random() * (pieces.length - 1))][0]);
      },1000);
    
    }
  },[start,startCount]);

  useEffect(()=>{
    if(nextPiece!==null)
      console.log(nextPiece);
  },[nextPiece])
console.log(startCount);
  return (
    <div tabIndex="0" className="App" onKeyDown={(e)=>{if(!start)setStart(true);}}>
      <div className ="Page">
        <div className ="rainbow-text" >Tetris</div>
        <div>Press any key to start</div>
          <Board Board ={board}
          score = {score}
          Hscore ={Hscore}
          nextPiece = {nextPiece}
          startCount = {startCount}
          start = {start}
          restart = {()=>{setStart(false);setBoard(firstBoard);setNextPiece(null);setPiece(null);setScore(0);setStartCount(5);}}
          />
          
      </div>
    </div>
  );
}

export default App;
