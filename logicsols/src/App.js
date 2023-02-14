import React from 'react'; 
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'; 
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <BrowserRouter>
       <Sidebar>
        <Routes>
            <Route path="/dashboard " element ={<Dashboard/>}/>
        </Routes>
        </Sidebar> 
    </BrowserRouter>
  );
}
export default App;
