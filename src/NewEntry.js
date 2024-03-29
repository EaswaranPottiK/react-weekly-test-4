import React from 'react'

const NewEntry = (props) => {
  return (
    <div>

        <br></br>
        <div style={{display:'flex',flexDirection:'column',width:'89%',margin:'auto',padding:'10 10px',backgroundColor:'#4472C4'}}>
          <p style={{color:'white',textAlign:'center',fontWeight:'600'}}>Fill below form for New Entry</p>
          <div style={{display:'flex',justifyContent:'space-around'}}>
            <input style={{minWidth:'15vw'}} type='text' placeholder='Name'></input>
            <input type='date' ></input>
            <input type='number' minLength="3" required placeholder='Aadhar Number-12 digits'></input>
            <input type='number' placeholder='Mobile Number-10 digits'></input>
            <input type='text' disabled></input>
            <button onClick={(e)=>{props.deleteData(e)}}>Delete</button>
            <button onClick={(e)=>{props.saveData(e); }}>Save</button>
          </div>
          <br></br>
        </div>
    </div>
  )
}

export default NewEntry