import React from 'react';
import logo from './logo.svg';
import './App.css';
import PixiGraph from "./components/elements/charts/graph";
import Canvas from "./components/Canvas";

function App() {
    return (
        <div className="App">
            <PixiGraph/>
            {/*<Canvas />*/}

        </div>
    );
}

export default App;
