import React from 'react';
import './App.css';
import firebase from './firebase';
// import {geoloacted} from 'react-geolocated';


// import components
import FormInput from './components/Form/Form';
import Toolbar from './components/Toolbar/Toolbar';
import Map from './components/Map/map';
import PostedCards from './components/postedCards/PostedCards';

function App() {



  const [good, setGoods] = React.useState([]);
  

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("good").get();
      setGoods(data.docs.map(doc => ({...doc.data(), id:doc.id}))) 
    };
    fetchData();
  }, []);


  return (
    <div className="App">
      <Toolbar/>
      <div className="map-container">
        <Map good={good}></Map>
        <FormInput good={good} />
      </div>
      <div className="card-contents">
       <PostedCards good={good} />
      </div>
      
    </div>
  )
};

export default App;
