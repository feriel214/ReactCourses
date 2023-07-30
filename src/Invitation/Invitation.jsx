import React from 'react'
import './Invitation.css'

function Invitation(props) {

 
  return (
 
        <div class="card" style={{width:"150px;"}}>
            <img src={props.imgSrc} className="card-img-top image-profile" />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5> 
                <a href="#" class="btn btn-primary mt-5">Confirmer</a>
                <a href="#" class="btn btn-secondary mt-5">Supprimer</a>
            </div>
        </div>

  )
}

export default Invitation





/**
 * props 
 * parent : passage <Invitaion imgSrc={} title={} />
 * child : reception (props)
 */