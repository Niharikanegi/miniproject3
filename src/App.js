import React from "react"
// import {Container, AppBar, Typography, Grow, Grid} from '@mui/material';
import './App.css';
import Create from "./component/createStudent/CreateStudent";
// import Home from "./component/Home/Home";
import DenseTable from "./component/showStudent/ShowStudent";
function App() {
  
  return (
    <>
    {/* <Home /> */}
    <Create />
    <DenseTable />
    </>
    
  );
}

export default App;
