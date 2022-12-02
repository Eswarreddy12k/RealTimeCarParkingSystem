import './App.css';
import axios from 'axios';
import {useState} from 'react'


function App() {
  const [data1,setdata1]=useState([])
  axios.get("https://carpsapi-production.up.railway.app/showdb").then((response)=>{
    setdata1(response.data)
  }).catch((error)=>{
    console.log(error);
  })
  console.log(data1);
  return (
    <>
    <div className="header">
      <h1>Car Parking System</h1>
    </div>
    <div className="free-slots">
      <h1>Free Slots</h1>
        <div className="freeslotsflex">
          
        {data1.map((datax,e)=>{
          return(
            data1[e].status.toString()===(0).toString() &&
            <>
            <div className="freeslotsflex1"><h3>{data1[e].slot_id}</h3></div>
            </>
              
            
            
          )
          
        })}
     </div>
    </div>
    <div className='roadmap1'>
      <h1>Slot Map</h1>
      <div className='roadmap'>
      {data1.map((datax,e)=>{
          return(
            
            
              <>
              <div className='carslot'>
              <div className='whitestrip'></div>
              {data1[e].status.toString()===(1).toString() &&
          <img src='https://www.seekpng.com/png/full/257-2576097_car-red-vehicle-automobile-auto-car-clipart-top.png' alt=''/>}
          {data1[e].status.toString()===(0).toString() &&
          <div className='blank'><h1>{data1[e].slot_id}</h1></div>}
          <div className='whitestrip'></div>
        </div>
              </>
              
             
            
          )
          
        })}
        
        
        
        
        
      </div>
      

    </div>
    <div className='footer'>
      
    </div>

    </>
  );
}

export default App;
