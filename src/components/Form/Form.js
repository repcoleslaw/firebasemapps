import React from 'react'
import firebase from 'firebase'
import {geolocated} from 'react-geolocated';

import './Form.css'




const FormInput = ({good}, props) =>{

  // form states

  const [newGoodName, setNewGoodName] = React.useState([good.name])
  const [newGoodService, setNewGoodService] = React.useState([good.service])
  const [newGoodIndustry, setNewGoodIndustry] = React.useState([good.industry])
  const [newGoodDetails, setNewGoodDetails] = React.useState([good.details])
 
  // push to db
  const onCreate = () =>{
    const db = firebase.firestore()
    db.collection('good').add({name: newGoodName, industry: newGoodIndustry, service: newGoodService, details: newGoodDetails})
  }

    //button toggle
    const [isToggled, setToggled] = React.useState(false);

    const toggleTrueFalse = () => setToggled(!isToggled);

    let buttonClasses = 'form-button'
    if (isToggled){
      buttonClasses = 'form-button open'
    }
    let formClasses = 'form-closed'
    if (isToggled){
     formClasses = 'form-Container'
    }

  return (
    <div>
        <div className={buttonClasses}
         onClick={toggleTrueFalse}>
        <h1>+</h1>
        </div>
    
    <div className={formClasses}>
      <div className="formInput">
        <h1>Show your good!</h1>
        <label>Enter your name:</label>
        <input className="form-addFields" value={newGoodName} onChange={(e)=> setNewGoodName(e.target.value)}/>
        
        <label>Enter your Good:</label>
        <input className="form-addFields" value={newGoodService} onChange={(e)=> setNewGoodService(e.target.value)}/>
        
        <label>Enter what you typically do:</label>
        <input className="form-addFields"value={newGoodIndustry} onChange={(e)=> setNewGoodIndustry(e.target.value)}/>
        
        <label>Add some extra details:</label>
        <textarea className="form-addDetail" value={newGoodDetails} onChange={(e)=> setNewGoodDetails(e.target.value)}/>

        <label>Are your coordinates:{geolocated}

        </label>

       
        <button className="submitButton" type="submit" onClick={onCreate}>Look Ma', I'm helpin'!</button>
      </div>
    </div>
    </div>
  )
}

export default FormInput;

