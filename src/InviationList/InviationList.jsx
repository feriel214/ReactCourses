import React  , {useEffect, useState} from 'react'
import Invitation from '../Invitation/Invitation'
import axios from 'axios'
function InviationList() {
  const [users,setUsers]=useState([])
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
  })
  
    return (
    <div className='container-fluid'>
       <div className='row'>
       {
            users.map(user=>(
                <div className='col-lg-3' key={user.id}>
                  <Invitation  imgSrc={user.image} title={user.firstName} />
                </div>
            ))
       }
           
       </div>
    </div>
  )
}

export default InviationList