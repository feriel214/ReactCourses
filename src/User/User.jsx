import React , {useEffect,useState} from 'react'
import axios from 'axios';
import "./User.css";
function User() {
 const [users,setUsers]=useState([]) ;

 useEffect(()=>{
    const apiURL="https://dummyjson.com/users"
 axios.get(apiURL)
    .then((response)=>{
        //donnes well recieved 
       console.log("response",response.data.users);
       //affectation au tableau 
       setUsers(response.data.users);
    }).catch((err)=>{
      console.log(err)
    })
 },[users])
 
    return (
    <div className='user-app'>
          <table class="table table-success">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Image</th>
                    <th scope="col">Firstname</th>
                    <th scope="col">Lastname</th>
                    <th scope="col">Age</th>
                   
                    </tr>
                </thead>
                <tbody>
                    { users.map(user=>(
                    <tr key={user.id}>
                        <th scope="row">{user.id}</th>
                        <td>
                            <img  className="rounded-circle"
                                  style={{ width: '50px', height: '50px' ,backgroundColor:'blue'}} 
                                  src={user.image}/>
                        </td>
                        <td>{user.firstName} </td>
                        <td>{user.lastName}</td>
                        <td>{user.age}</td>
                    </tr>
                  ))}
                   
                </tbody>
                </table>
    </div>
  )
}

export default User



/**
 * Recat component : 
 * class component , functional component 
 * fct component (limitéé) + hooks 
 * class component (complexité )
 */