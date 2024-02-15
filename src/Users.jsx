import { useEffect, useState } from "react"
import Friend from "./friend"

export default function Users(){
    const [users,setUsers]=useState([])

    const style2={
        border: '1px solid red'
    }

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return(
        <div style={style2}>
            <h2>User: {users.length}</h2>
            {
                users.map(friend=> <Friend friend={friend}></Friend>)
            }
        </div>
    )
}