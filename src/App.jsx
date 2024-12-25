
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Services from './Components/Services'
import Transitions from './Components/Transitions'
import Welcome from './Components/Welcome'

function App() {
  
  return (
   <>
   <div className='min-h-screen'>
    <div className='gradient-bg-welcome'>
      <Navbar/>
   <Welcome/>
   </div>
   <Services/>
   <Transitions/>
   <Footer/>
   </div>
   

   
   
   </>
  )
}

export default App
