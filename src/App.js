import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginReg from './components/LoginReg';
import {app,database } from './firebaseConfig';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginReg />} />
      </Routes>
    </div>
  );
}

export default App;
