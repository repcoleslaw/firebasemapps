import React from 'react';
import './App.css';
import firebase from './firebase';
import FormInput from './components/Form/Form'


function App() {

  const [good, setGoods] = React.useState([])
  // const [newGoodName, setNewGoodName] = React.useState()
  // const [newGoodService, setNewGoodService] = React.useState()
  // const [newGoodIndustry, setNewGoodIndustry] = React.useState()
  // const [newGoodDetails, setNewGoodDetails] = React.useState()


  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection("good").get()
      setGoods(data.docs.map(doc => ({...doc.data(), id:doc.id}))) 
    }
    fetchData()
  }, [])

  // const onCreate = () =>{
  //   const db = firebase.firestore()
  //   db.collection('good').add({name: newGoodName})

  // }


  return (
    <div className="App">
      {/* <div>
        <input value={newGoodName} onChange={(e)=> setNewGoodName(e.target.value)}/>
        <input value={newGoodService} onChange={(e)=> setNewGoodName(e.target.value)}/>
        <input value={newGoodIndustry} onChange={(e)=> setNewGoodName(e.target.value)}/>
        <input value={newGoodDetails} onChange={(e)=> setNewGoodName(e.target.value)}/>
            <button onClick={onCreate}>Create</button>
      </div> */}
      <FormInput good={good}/>
      {good.map(good => (
       <li key={good.id}>
        <p>{good.name}</p>
        <p>{good.industry}</p>
        <p>{good.service}</p>
       </li>
        ))}
        
    </div>
  );
}

export default App;
