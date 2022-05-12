import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes } from 'react-router-dom';
import Episodes from "./components/Episodes/Episodes";
import Characters from "./components/Characters/Characters";
import EpisodePage from "./components/Episodes/EpisodePage";



function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/episodes/*" element={<Episodes/>}/>
                <Route path="/episodes/episode/:id" element={<EpisodePage/>}/>
                <Route path="/characters/*" element={<Characters/>}/>
            </Routes>
        </div>
    );
}

export default App;
