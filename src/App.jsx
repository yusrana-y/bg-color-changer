import { useState,useEffect} from 'react'
import './App.css'

function App() {

  const [color,setColor]  = useState("bg-secondary")

  const Change = (bColor) => {
    setColor(bColor)
  }

  useEffect(()=>{
    document.body.className=color
  },[color])

  return (
   
      <div style={{width:'100%',height:'100vh'}}  >
      <h1 className='text-center text-light pt-3'>Background Color Changer</h1>
        <div className=" d-flex align-items-center justify-content-center mt-5 gap-2  " >
        <button type="button" className='green btn border border-light btn-success' onClick={()=>Change('bg-success')}>Green</button>
        <button type="button" className='green btn border border-light btn-warning' onClick={()=>Change('bg-warning')}>Yellow</button>
        <button type="button" className='green btn border border-light btn-dark' onClick={()=>Change('bg-dark')}>Black</button>
        <button type="button" className='green btn border border-light btn-primary' onClick={()=>Change('bg-primary')}>Blue</button>
        <button type="button" className='green btn border border-light btn-danger' onClick={()=>Change('bg-danger')}>Red</button>




        </div>
      </div>

  )
}

export default App
