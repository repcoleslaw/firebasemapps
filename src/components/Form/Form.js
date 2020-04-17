import React from 'react'
import firebase from 'firebase'

import './Form.css'

const FormInput = ({good}) =>{

 

  const [newGoodName, setNewGoodName] = React.useState([good.name])
  const [newGoodService, setNewGoodService] = React.useState([good.service])
  const [newGoodIndustry, setNewGoodIndustry] = React.useState([good.industry])
  const [newGoodDetails, setNewGoodDetails] = React.useState([good.details])
 

  // const onUpdate = () => {
  //   const db = firebase.firestore()
  //   db.collection('good').doc(good.id).set({...good, name})
  // }

  const onCreate = () =>{
    const db = firebase.firestore()
    db.collection('good').add({name: newGoodName, industry: newGoodIndustry, service: newGoodService, details: newGoodDetails})

  }



  return (
    <div className="form-Container">
      <div className="formInput">
        <h1>Show your good!</h1>
        <p>Enter your name:
        <input value={newGoodName} onChange={(e)=> setNewGoodName(e.target.value)}/>
        </p>
        <p>Enter your Good:
        <input value={newGoodService} onChange={(e)=> setNewGoodService(e.target.value)}/>
        </p>
        <p>Enter what you typically do:
        <input value={newGoodIndustry} onChange={(e)=> setNewGoodIndustry(e.target.value)}/>
        </p>
        
        <input value={newGoodDetails} onChange={(e)=> setNewGoodDetails(e.target.value)}/>
        <button onClick={onCreate}>Create</button>
      </div>
    </div>
  )
}

export default FormInput;

