import React from 'react'
import './board.css'
import NextPiece from '../nextPiece/nextPiece';
const Board = props =>{    
    const bgColors = e =>{ 
    switch (e) {
        case "1":
            return "#00B1E1"; //Blue
        case "2":
            return "#37BC9B"; //Cyan  
        case "3":
            return "#37BC9B"; //Green  
        case "4":
             return "#E9573F"; //Red  
        case "5":
            return "#F6BB42"; //Yellow  
        default:
            return "white"; //Default "0"  
    }
};
    return(
        <div className ="objects">          
            <div className ="board">
                {props.Board.map((element,index)=><div key={index} className ="row">
                    {element.map((e,i)=><div key = {i} className ="cell"
                    style = {{backgroundColor: bgColors(e.Color)}}>                        
                    </div>)}
                    </div>)}                    
            </div>
            {props.start&&props.startCount!==-1?<div className ="boardStart">{props.startCount}</div>:null}
            <div>
                <div className ="scores">
                    <div className ="score"> {`Current Score ${props.score}`} </div>
                    <div className ="score"> {`Highest Score ${props.Hscore}`} </div>                    
                </div>
                <NextPiece nextPiece={props.nextPiece}/>
                <div className ="startAgain" onClick = {props.restart}>Start Again</div>
            </div>
        </div>
    )
}

export default Board;