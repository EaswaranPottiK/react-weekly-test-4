import React from 'react'

const FilteredDataHtml = (props) => {
  return (
    <div style={{border:'1px solid black', marginLeft:'1vw',maxWidth:'18vw',padding:'1vw 2vw',marginTop:'1vw'}}>
        <p>Name: {props.name}</p>
        <p>Date of Birth: {props.dob}</p>
        <p>Aadhar No: {props.aadharNo}</p>
        <p>Mobile No: {props.mobileNo}</p>
        <p>Age: {props.age}</p>
    </div>
  )
}

export default FilteredDataHtml