import React,{useEffect,useState} from 'react';
import Board from './components/board/board.js';
import './App.css';

function App() {
  const firstBoard = [
    [{Color:"1",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"1",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
  ]
  const newBoard = [
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
    [{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null},{Color:"0",Stable:null}],
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
      [["1","1","1"],["0","1","0"]],
      [["1"],["1","1","0"],["1"]],
      [["0","1","0"],["1","1","1"]],
      [["1"],["0","1","1"],["1"]]      
    ],
    [
      // L
      [["1"],["1"],["1"],["1","1","0"]],
      [["1","0","0","0"],["1","1","1","1"]],
      [["0","1","1"],["1"],["1"],["1"]],
      [["1"],["1"],["1"],["0","1","1"]]
    ],
    [
      // Z
      [["0","1","1"],["0","0","0","1","1"]],
      [["1"],["0","1","1"],["0","0","1"]],
      [["0","1","1"],["1","1","0"]],
      [["1"],["0","1","1"],["0","0","1"]]
    ]
  ];
  const [board,setBoard] = useState(firstBoard)
  const [score,setScore] = useState(0);
  const [piece,setPiece] = useState(null);
  const [fallingPiece,setFallingPiece] = useState(false);
  const [nextPiece,setNextPiece] = useState(null);
  const [Hscore,setHScore] = useState(0);
  const [start,setStart] = useState(false);
  const [startCount,setStartCount] = useState(5);
  
  useEffect(()=>{
    document.addEventListener('keyup', (e) => {      
    if(!start && e.key==="Enter")
      setStart(true);
     
    });
     // eslint-disable-next-line
  },[])
  
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
    else if(start && startCount===-1)
    {     
      let changedBoard = [...board];
      if(!fallingPiece)
          {
            setFallingPiece(true);
            setPiece(nextPiece);            
            let currentPiece = piece || nextPiece;           
            for(let i=0;i<currentPiece.length;i++)
            {                         
              for(let j=0;j<currentPiece[i].length;j++)
                {                 
                  changedBoard[i][4+j].Color = currentPiece[i][j];
                }
            }
            setBoard(changedBoard);
          }
          else
          {
            for(let i=0;i<pieces.length;i++)
            {                         
              for(let j=0;j<pieces[i].length;j++)
                {                 
                  changedBoard[i][4+j].Color = pieces[i][j];
                }
            }
            setBoard(changedBoard);
          }
      

    }
     // eslint-disable-next-line
  },[start,startCount]);

  // useEffect(()=>{
  //   if(nextPiece!==null)
  //     console.log(nextPiece);
  // },[nextPiece])
  return (
    <div  className="App">
      <div className ="Page">
        <div className ="rainbow-text" >Tetris</div>
        <div>Press Enter to start</div>
          <Board Board ={board}
          score = {score}
          Hscore ={Hscore}
          nextPiece = {nextPiece}
          startCount = {startCount}
          start = {start}
          restart = {()=>{setFallingPiece(false);setStart(false);setBoard(firstBoard);setNextPiece(null);setPiece(null);setScore(0);setStartCount(5);}}
          />
          
      </div>
    </div>
  );
}

export default App;
