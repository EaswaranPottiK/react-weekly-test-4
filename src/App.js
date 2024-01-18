import logo from './logo.svg';
import './App.css';
import NewPerson from './NewPerson';
import RetriveInformation from './RetriveInformation';
import { useState } from 'react';

function App() {
  const [addNewPerson,setAddNewPerson] = useState(true)
  return (
    <>
      <header style={{backgroundColor:'#4472C4',textAlign:'center', padding:'3vh 0',fontSize:'20px',color:'white',fontWeight:'600'}}>
        Directory App
      </header>
      <div style={{marginTop:'3vh',padding:'0 3vw'}}>
          <div>
            <button style={{backgroundColor:'#4472C4',color:'white',border:'none',padding:'1.5vh 3vh',borderRadius:'4px'}}>Add New Person</button>
            <button style={{marginLeft:'6vw',backgroundColor:'#4472C4',color:'white',border:'none',padding:'1.5vh 3vh',borderRadius:'4px'}}>Retrive Information</button>
          </div>

          {addNewPerson ? <NewPerson />:<RetriveInformation/>}
          
      </div>
    </>
  );
}

export default App;
