import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAll from './Components/ViewAll';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/viewall' element={<ViewAll/>}/>

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
