import React,{useEffect,useState} from 'react';
import './nextPiece.css';

const NextPiece = props=>{
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
       <div>
           <div> NextPiece</div>
            <div className ="nextPiece">
            {props.nextPiece===null?null:props.nextPiece.map((e,index)=><div className="nextPiece-row" key={index}>
              {e.map((el,i)=><div key={i} className ="nextPiece-cell" style = {{backgroundColor: bgColors(el)}}></div>)}
            </div>)}
        </div>
       </div>
    )
}

export default NextPiece;