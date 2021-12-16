import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Home from './Pages/Home';

function App() {
    return(
        <div>
            <Header/>
            <Home />
        </div>

    );
}

export default App;
