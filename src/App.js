import './App.css';
import Navbar from './Component/Navbar';
//import Galimg from './Component/gal';
import TextCom from './Component/TextCom';
//import MyProfile from './Component/MyProfile';
import Alart from './Component/Alart';
import React, { useState } from 'react'

function App() {
  const[mode,setMode]=useState("light");
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

  }

  
  const toggleMode=()=>{
    if(mode==='dark')
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode Enable","success")
    }
    else
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode Enable","success")
    }
    }
  return (
   <> 
<Navbar title="TextBar" about="About Us" mode={mode} toggleMode={toggleMode}/>
<Alart alert={alert}/>

<div className='container my-3'>
  

  <TextCom he="Enter Text for Analyze" mode={mode} Example=""/>

</div>


{/*<About/>*/}




{/*<MyProfile/>
<Galimg img_desc="Smart Boy" info="Above are Sample Images"/>
*/}

</>
  );
}

export default App;
