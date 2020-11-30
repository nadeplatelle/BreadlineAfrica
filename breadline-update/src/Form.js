import React, {useState} from 'react';
import {TextField, Button} from '@material-ui/core'
import {db} from './firebase'
import Card from '@material-ui/core/Card';
import './App.css'
import { InputAdornment } from '@material-ui/core';

export default function SimplePaper({did, fullname, donorno, donamount}) {

const [error, setError] = useState("")
const [success, setSuccess] = useState("")
const [name] = useState(fullname)
const [refno] = useState(donorno)
const [curdonamount, setCurdonamount] = useState(donamount)
const [newdonamount, setNewdonamount] = useState(donamount + 20)





 const handleSave =  (e) => {
    e.preventDefault()
    setError(newdonamount > curdonamount?"":"Please enter a increased amount")
          
                 if (!error) {
               
                db.collection('Donors2').add({name: name, 
                                              refno: refno, 
                                               curdonamount: curdonamount,
                                              newdonamount: newdonamount
                                  })
                                  setSuccess(true) 
                                  console.log("Thank you")
                                }
                             

};


  return (
 
    <Card  className="paper">
          <img src="https://breadlineafrica.org/wp-content/uploads/2019/05/bla_black_logo-2.png" alt="" width="150px"/><br/><br/>
          
          <div className="label">{name} ({refno})</div>

          <h4>Thank you for your support!  It's because of your generosity and kindness that we are able to continue our work in poor communities.</h4>
          <h4>Please consider making a small increase in your monthly donation amount:</h4>
   
          <div className="left">
          
          <div className={"successful " + (success? "" : "hide2")}>Thank you! Your update has been recorded.</div>  
          </div>
      
         
          <TextField
            margin="dense"
            value={curdonamount} onChange={(e) => setCurdonamount(e.target.value)}
            id="curdonamount"
            label="Current donation Amount"
            type="number"
            disabled
            variant="outlined"
            InputProps={{
              startAdornment: <InputAdornment position="start">R</InputAdornment>,
            }}
          />
          <TextField
            margin="dense"
            value={newdonamount} onChange={(e) => setNewdonamount(e.target.value)}
            error={null}
            id="newdonamount"
            label="New donation Amount"
            type="number"
            variant="outlined"
            focused
            onBlur={(e)=> setError(newdonamount > curdonamount ? "" : "Please enter a increased amount")}
            
            InputProps={{
              startAdornment: <InputAdornment position="start">R</InputAdornment>,
            }}
          />
          <div className="right">
          <div className={"errorbox " + (error? "" : "hide")}>Please enter a increased amount</div>
            
          </div>
            
          <div className="button">
          <Button variant="contained" onClick={handleSave} color="primary">
            Save
          </Button>
          </div>
          </Card>

  );
}