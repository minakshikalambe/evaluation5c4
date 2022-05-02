import { useEffect,useState} from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export const UserList=()=>{
    const[users,setUsers]=useState([])
    useEffect(()=>{
    axios.get("http://localhost:8080/users").then(({data})=>{
      setUsers(data)
    })
    },[])
    return (
      <div className="user_details">
        <h3>{users.id}</h3>
        <h4>{users.username}</h4>
        <h3 >{users.pass}</h3>
        <h3>{users.role}</h3>
      </div> 
    );
    
    
}

