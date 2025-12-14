import { useState ,useEffect} from "react";

function Counter(){
    let [count,setCount]=useState(0);   
function incCount(){
    setCount((countybounty)=>{
        return countybounty+1;
    });
     setCount((countybounty)=>{
        return countybounty+1;
    });
    //twice incremented at each step since you have written the func twice 
}

useEffect(function printSomething(){
    console.log("counter incremented");
});

    return(
        <>
        <p>Count={count}</p>
        <button onClick={incCount}>Inc count by clicking me</button>
        </>
    );
}

export default Counter;