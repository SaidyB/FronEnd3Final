import { Route, Routes } from 'react-router-dom'
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routes } from "./Components/utils/routes";
import Home from "./Routes/Home";
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import { useDoctorStates } from './Context';

function App() {

  const {state}= useDoctorStates()

  return (
      <div className="App">
        <div className={`App ${state.dark ? 'dark' : ''}`}>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path={routes.home} element={<Home/>}/>
            <Route path={routes.contacto} element={<Contact/>}/>
            <Route path={`${routes.detalles}/:id`} element={<Detail/>}/>
            <Route path={routes.favs} element={<Favs/>}/>
         
          </Routes>
      
          
          <Footer/>

          
        </div>

          
      </div>
  );
}

export default App;
