import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/home';
import Detail from './components/restrauntDetail';
import Update from './components/updateRestraunt';

export const App = () => {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/restraunts/:id" element={<Detail />} />
        <Route path="/restraunts/:id/update" element={<Update />}/>
        <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;