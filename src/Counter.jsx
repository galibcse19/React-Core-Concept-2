import { useState } from "react"

export default function Counter(){

    const [count,setCount] = useState(0);

    const handelAdd=()=>{
        const newCount=count+1;
        setCount(newCount);
    }
    const handelReduce=()=>{
        const newCount=count-1;
        setCount(newCount);
    }

    const style1={
        border:'1px solid red'
    }

    return(
        <div style={style1}>
            <h3>count: {count} </h3>
            <button onClick={handelAdd} style={{marginBottom:'10px'}}>Increase</button>
            <button onClick={handelReduce}>Reduce</button>
        </div>
    )
}