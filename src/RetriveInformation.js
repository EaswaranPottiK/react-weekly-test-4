import React, { useRef, useState } from 'react'
import FilteredDataHtml from './FilteredDataHtml';
import ReactDOM from 'react-dom'

const RetriveInformation = () => {
  const inputDataHere = useRef('')
  function filterData(e){
    const inputAadharNo = e.target.parentElement.children[0].value;
    let data = JSON.parse(localStorage.getItem('userData'))
    data= data.filter((item)=>(item.aadharNo === inputAadharNo))
    data= data[0]
    console.log(data)
    if (data){
      console.log('inside data ')
      const newEntry = document.createElement('div')
      ReactDOM.render(<FilteredDataHtml mobileNo={data.mobileNo} age={data.age} name={data.name} dob={data.dob} aadharNo={data.aadharNo} />, newEntry)
      inputDataHere.current.innerHTML =''
      inputDataHere.current.appendChild(newEntry)
    }
    else{
      inputDataHere.current.innerHTML =`<h3>&nbsp;&nbsp;&nbsp;No data found</h3>`
    }
  }

  return (
    <div>
      <div style={{border:'1px solid black',marginTop:'3vh',minHeight:'70vh', position:'relative'}}>
        <div style={{fontWeight:'600',border:'1px solid black',padding:'1vw 3vw',maxWidth:'10vw'}}>Retrieve Information</div>
        <br></br>

        <div style={{display:'flex',alignItems:'center',gap:'15px',marginLeft:'15px'}}>
          <input type='number' style={{height:'4vh', width:'20vw', fontSize:'20px'}}></input>
          <button onClick={filterData} style={{backgroundColor:'#4472C4',color:'white',border:'none',padding:'1.5vh 3vh',borderRadius:'4px'}}>Find</button>
        </div>

        <div ref={inputDataHere}></div>

      </div>
    </div>
  )
}

export default RetriveInformation