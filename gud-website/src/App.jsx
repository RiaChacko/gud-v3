import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import About from './pages/About'
import Events from './pages/Events'
import Officers from './pages/Officers'
import DesignTeams from './pages/Design-Teams'
import Gallery from './pages/Gallery'
import Resources from './pages/Resources'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Footer from './components/Footer'
import { ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import IndividualDesignTeam from './pages/IndividualDesignTeam';
function App() {

  	return (
    	
		<Router>
			<ToastContainer/>
      		<Navbar/>
				<Routes>
					<Route path='/' element={<Landing/>}/>
					<Route path='/about' element={<About/>}/>
					<Route path='/events' element={<Events/>}/>
					<Route path='/officers' element={<Officers/>}/>
					<Route path='/design-teams' element={<DesignTeams/>}/>
					<Route path='/gallery' element={<Gallery/>}/>
					<Route path='/resources' element={<Resources/>}/>
					<Route path='/individual' element={<IndividualDesignTeam/>}/>
				</Routes>
			
			<Footer/>
		
		</Router>
    	
  	)
}

export default App
