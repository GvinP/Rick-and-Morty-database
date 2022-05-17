import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {HashRouter, Outlet, Route, Routes} from 'react-router-dom';
import Episodes from "./components/Episodes/Episodes";
import Characters from "./components/Characters/Characters";
import EpisodePage from "./components/Episodes/EpisodePage";
import {Navigation} from "./components/Navigation/Navigation";
import Locations from "./components/Locations/Locations";


function App() {
    return (
        <div className="App">
            <HashRouter>
                <Header/>
                <Routes>
                    <Route path="/*" element={
                        <>
                            <Navigation/>
                            <Episodes/>
                        </>
                        }/>
                    <Route path="/episodes" element={
                        <>
                            <Navigation/>
                            <Outlet/>
                        </>
                    }>
                        <Route path="*" element={<div>Page not found</div>}/>
                        <Route path="" element={<Episodes/>}/>
                        <Route path="season" element={<Outlet/>}>
                            <Route path=':id' element={<Episodes/>}/>
                            <Route path=':id/:epId' element={<EpisodePage/>}/>
                        </Route>
                    </Route>
                    <Route path="/characters" element={<Characters/>}/>
                    <Route path="/locations" element={<Locations/>}/>
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
