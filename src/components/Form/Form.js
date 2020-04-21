import React from 'react'
import firebase from 'firebase'


import './Form.css'
import { geolocated } from 'react-geolocated';




const FormInput = ({good}, props) =>{
  // form states

  const [newGoodName, setNewGoodName] = React.useState([good.name]);
  const [newGoodService, setNewGoodService] = React.useState([good.service]);
  const [newGoodIndustry, setNewGoodIndustry] = React.useState([good.industry]);
  const [newGoodDetails, setNewGoodDetails] = React.useState([good.details]);
  // long & lat fields
  const [newGoodLongitude, setNewGoodLongitude] = React.useState([good.longitude]);
  const [newGoodLatitude, setNewGoodLatitude] = React.useState([good.Latitude]);



 
  // push to db
  const onCreate = () =>{
    const db = firebase.firestore()
    db.collection('good').add({name: newGoodName, industry: newGoodIndustry, service: newGoodService, details: newGoodDetails, longitude: newGoodLongitude, latitude: newGoodLatitude})
    alert('a document was submitted, Let me refresh for you');
   
  }

// get location
const getPos = (e) => {
  e.preventDefault();
  navigator.geolocation.getCurrentPosition(successPos, errorPos);


};

const successPos = (pos) => {
  
  var coord = pos.coords;

  alert("Success! I have your position in the console!")

  console.log('Your current position is:');
  console.log(`Latitude : ${coord.latitude}`);
  console.log(`Longitude: ${coord.longitude}`);
  console.log(`More or less ${coord.accuracy} meters.`);

}

const errorPos = (pos) => {
  alert('Sorry, no position available.');
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
        

          <form className="formInput">

          <h1>Show your good!</h1>

            <label>Enter your name:</label>
            <input className="form-addFields" value={newGoodName} onChange={(e)=> setNewGoodName(e.target.value)}/>

            <label>Enter your Good:</label>
            <input className="form-addFields" value={newGoodService} onChange={(e)=> setNewGoodService(e.target.value)} />

            <label>Enter what you typically do:</label>
            <input className="form-addFields" value={newGoodIndustry} onChange={(e)=> setNewGoodIndustry(e.target.value)}/>

            <label>Add some extra details:</label>
            <textarea className="form-addDetail" value={newGoodDetails} onChange={(e)=> setNewGoodDetails(e.target.value)}/>

            <label> Looking for your location:
            <input className="form-addFields" placeholder="latitude" value={newGoodLatitude} onChange={(e)=> setNewGoodLatitude(e.target.value)}/>    
            <input className="form-addFields" placeholder="longitude" value={newGoodLongitude} onChange={(e)=> setNewGoodLongitude(e.target.value)}/>   
            </label>
           

            <input type="submit" value="grab position" onClick={getPos}></input>

            <button className="submitButton" type="submit" onClick={onCreate} >Look Ma', I'm helpin'!</button>
          </form>
          

          
        
      </div>
    </div>
  )
}

export default FormInput;

