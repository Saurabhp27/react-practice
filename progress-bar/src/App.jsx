import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [width, setWidth] = useState(40);

  useEffect(() => {
    let interval = setInterval(() => {
      setWidth( prev => { 
      if( prev >= 100){
        clearInterval(interval);
        return prev;
      }
      return prev +10;
    })
    }, 500)

    return () => clearInterval(interval); 
  }, [])
  
  return (
    <>
      <div className='outer-container'> 
        <div className='inner-container' style={{width:`${width}%`}}>
          <span style={{padding:"8px"}}> {width} % </span>
        </div>
      </div>
    </>
  )
}

export default App
