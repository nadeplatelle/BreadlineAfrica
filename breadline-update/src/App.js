 import SimplePaper from './Form'
import './App.css';
import SimpleAppBar from './Appbar'
import {db} from './firebase'
import React, {useState, useEffect} from 'react'


function App() {
  const windowUrl = window.location.search.toString();
  const donorid = windowUrl.substring(9)


  const [donors, setDonors] = useState([])
  
 

  useEffect(() => {
      db.collection('Donors').where('Donorid', '==', donorid).onSnapshot(snapshot => {
        setDonors(snapshot.docs.map(doc => ({
          id: doc.id,
          donornow: doc.data(),
         })) )
      })
   }, [])

   

  return (
    <div className="App">
        <SimpleAppBar/>
     
        {
        donors.map(({id, donornow}) => (
        <SimplePaper did={id} donorno={donornow.Donorid} fullname={donornow.Fullname} donamount={donornow.OldDonationAmount}   /> 
        ))
      }   

           
    </div>
  );
}

export default App;
