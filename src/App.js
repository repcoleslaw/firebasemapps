import React from 'react';
import './App.css';
import firebase from './firebase';


function App() {

  const [good, setGoods] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection("good").get()
      setGoods(data.docs.map(doc => doc.data())) 
    }
    fetchData()
  }, [])



  return (
    <div className="App">
      {good.map(good => (
        <li key={good.name}>{good.name}</li>
      ))}
    </div>
  );
}

export default App;
