import {Routes, Route} from 'react-router-dom'
import { Login } from './components/Login/Login';
import Home from './components/Home/Home';
import SideBar from './components/SideBar/SideBar';
import './App.css';
import GerentesTable from './components/GerentesTable/GerentesTable';

function App() {
  return (
    <div className="App">
        <SideBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        
            <Route path='/gerentes' element={<GerentesTable/>}/>
          
          
        </Routes> 

      
        

        
    </div>
  );
}

export default App;
