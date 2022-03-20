import React, {useState} from 'react';
import './css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./component/AppRouter";

function App() {
  return (
    <div className="App container">
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    </div>
  );
}

export default App;
