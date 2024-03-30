import './App.css';
import folder from './folders.json';
import Directory from './components/Directory';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {

  return (
    <div className="main-container 
      h-screen 
      bg-slate-100
      flex justify-center items-center">

        <BrowserRouter>
      
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path='/home' element={<Directory files={folder}/>}></Route>
            <Route path='/:folderName' element={<Directory files={{}}/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
