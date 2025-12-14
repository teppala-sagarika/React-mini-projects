import {useState} from "react";
import { generate,sum } from "./helper";
import Ticket from "./Ticket";

export default function LotteryGame({n,winCondition}){
   let [ticket,setTicket]=useState(generate(n));
   let isWinning=winCondition(ticket);
   let generateNum=()=>{
    setTicket(generate(n));
   }
    return(
      <>
      <h1>Lottery Game</h1>
      <Ticket ticket={ticket}/>
      <br></br>
      <button onClick={generateNum}>New Ticket</button>
      <h3>{isWinning&&"Congrats you won!!"}</h3>
      </>  
    );
}