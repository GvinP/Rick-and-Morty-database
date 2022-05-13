import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {HashRouter, Outlet, Route, Routes} from 'react-router-dom';
import Episodes from "./components/Episodes/Episodes";
import Characters from "./components/Characters/Characters";
import EpisodePage from "./components/Episodes/EpisodePage";
import {Navigation} from "./components/Navigation/Navigation";


function App() {
    return (
        <div className="App">
            <HashRouter>
                <Header/>
                <Routes>
                    <Route path="/*" element={
                        <div>
                            <Navigation/>
                            <Episodes/>
                        </div>
                        }/>
                    <Route path="/episodes" element={
                        <div>
                            <Navigation/>
                            <Outlet/>
                        </div>
                    }>
                        <Route path="*" element={<div>Page not found</div>}/>
                        <Route path="" element={<div><Episodes/></div>}/>
                        <Route path="season" element={<Outlet/>}>
                            <Route path=':id' element={<Episodes/>}/>
                            <Route path=':id/:epId' element={<EpisodePage/>}/>
                        </Route>
                        {/*<Route path=':id' element={<EpisodePage/>}/>*/}
                    </Route>
                    <Route path="/characters" element={<Characters/>}/>
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
