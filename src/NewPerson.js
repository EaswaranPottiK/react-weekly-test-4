import React, { useReducer, useRef } from 'react'
import NewEntry from './NewEntry'

const NewPerson = () => {
    const addDetails =useRef(null)
    function saveData(e){
        let name = e.target.parentElement.children[0].value
        let dob = e.target.parentElement.children[1].value
        let aadharNo = e.target.parentElement.children[2].value
        let mobileNo = e.target.parentElement.children[3].value
        let age =2024-parseInt(dob.slice(0,5))
        console.log(name, dob, aadharNo, mobileNo, age)

    }
    function addHtml(){
        console.log('f called')
        addDetails.current.innerHTML += 
       <NewEntry saveData={saveData}/>
        
    }
  return (

    <div>
            <div style={{border:'1px solid black',marginTop:'3vh',minHeight:'70vh', position:'relative'}}>
            <div style={{fontWeight:'600',border:'1px solid black',padding:'1vw 3vw',maxWidth:'10vw'}}>Add New Person</div>
            <br></br>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center', margin:'0 2vw',backgroundColor:'#4472C4',color:'white',height:'5vh'}}>
              <p style={{margin:'6vw'}}>Name</p>
              <p style={{margin:'1vw'}}>Date of Birth</p>
              <p style={{margin:'6vw'}}>Aadhar Number</p>
              <p style={{margin:'4vw'}}>Mobile Number</p>
              <p style={{margin:'3vw'}}>Age</p>
              <p style={{margin:'3vw'}}>Actions</p>
            </div>
            <div onClick={addHtml} style={{position:'absolute',bottom:'1vh',right:'1vh', backgroundColor:'#4472C4',textAlign:'center',color:'white',border:'none',padding:'1.5vh 3vh',borderRadius:'4px',maxWidth:'80px'}}>Add</div>
          
                        {/* on mouse click this component is added */}
            <div ref={addDetails}></div>
            {/* <br></br>
            <div style={{display:'flex',flexDirection:'column',width:'89%',margin:'auto',padding:'10 10px',backgroundColor:'#4472C4'}}>
              <p style={{color:'white',textAlign:'center',fontWeight:'600'}}>Fill below form for New Entry</p>
              <div style={{display:'flex',justifyContent:'space-around'}}>
                <input style={{minWidth:'15vw'}} type='text' placeholder='Name'></input>
                <input type='date' ></input>
                <input type='number' placeholder='Aadhar Number'></input>
                <input type='number' placeholder='Mobile Number'></input>
                <input type='text' disabled></input>
                <button onClick={(e)=>saveData(e)}>Save</button>
              </div>
              <br></br>
            </div> */}
            <NewEntry saveData={saveData}/>

          </div>
    </div>
    
  )
}

export default NewPerson