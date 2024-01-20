import React, { useReducer, useRef } from 'react'
import NewEntry from './NewEntry'
import ReactDOM from 'react-dom'

const NewPerson = () => {
    const addDetails =useRef(null)
    function deleteData (e){
      e.target.parentElement.parentElement.parentElement.remove();
      let jsonData = JSON.parse(localStorage.getItem('userData'));
      let aadharNo = e.target.parentElement.children[2].value
      const updatedJsonData = jsonData.filter((item)=>(item.aadharNo != aadharNo))
      localStorage.setItem('userData',JSON.stringify(updatedJsonData))
      console.log(localStorage.getItem('userData'))
    }
    function saveData(e){
        let name = e.target.parentElement.children[0].value
        let dob = e.target.parentElement.children[1].value
        let aadharNo = e.target.parentElement.children[2].value
        if (aadharNo <100000000000 && aadharNo<999999999999){
          alert('Please enter a valid aadhar number (12 digits)');
          return
        }
        let mobileNo = e.target.parentElement.children[3].value
        if (mobileNo <1000000000 && mobileNo<9999999999){
          alert('Please enter a valid mobile number (10 digits)');
          return
        }
        let age =2024-parseInt(dob.slice(0,5))
        e.target.parentElement.children[4].value = age

        let dataToBeEntered=[{name,dob,aadharNo,mobileNo,age}]

        if (localStorage.getItem('userData')==null){
          localStorage.setItem('userData',JSON.stringify(dataToBeEntered))
        }
        else{
          dataToBeEntered = [...JSON.parse(localStorage.getItem('userData')),...dataToBeEntered]
          localStorage.setItem("userData",JSON.stringify(dataToBeEntered))
        }
        console.log(localStorage.getItem('userData'))
        e.target.remove()
    }
    function addHtml(){
        console.log('f called')
        const newEntryContainer = document.createElement('div');
        ReactDOM.render(<NewEntry saveData={saveData} deleteData={deleteData} />, newEntryContainer)
        addDetails.current.appendChild(newEntryContainer)
        
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
            
            <NewEntry saveData={saveData} deleteData={deleteData} />
            <div ref={addDetails}></div>
            <div onClick={addHtml} style={{position:'absolute',bottom:'1vh',right:'1vh', backgroundColor:'#4472C4',textAlign:'center',color:'white',border:'none',padding:'1.5vh 3vh',borderRadius:'4px',maxWidth:'80px'}}>Add</div>

          </div>
    </div>
    
  )
}

export default NewPerson