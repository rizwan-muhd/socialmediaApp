import './App.css';
import React,{useMemo,useEffect} from 'react';
import {BrowserRouter, Navigate,Routes,Route,useLocation} from "react-router-dom";
import {useSelector} from 'react-redux'
import { CssBaseline,ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';
import Navbar from './screens/navbar';
import HomePage from './screens/homepage';
import LoginPage from './screens/loginpage';
import Router from './routes'
import SignUpPage from './screens/signuppage';
import ProfilePage from './screens/profilepagepage';
import { HelmetProvider } from 'react-helmet-async';

function App() {

  const {pathname} = useLocation
  const mode = useSelector((state)=> state.mode);
  const theme= useMemo(()=>createTheme(themeSettings(mode)),[mode])

  useEffect(()=>{
    document.documentElement.scrollTop =0;
    document.documentElement.scrollTop = 0;

  },[pathname])

  // const getRoutes =(allRoutes)=>{
  //   allRoutes.map((route)=>{
  //     //  if(route.path){
  //       return <Route exact path={route.path} element={route.component}/>
  //     //  }
  //   })
  // }

  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <HelmetProvider>
       <ThemeProvider theme={theme}>
        <CssBaseline/>
        <BrowserRouter>
        {/* <Routes> */}
          {/* <Route> */}
         {/* {getRoutes(routes)} */}
         {/* <Route exact path="/" element={<LoginPage/>}/>
         <Route exact path ="/signup" element={<SignUpPage/>}/>
         <Route path="/home" element={<HomePage/>}/>
         <Route path="/profile" element={<ProfilePage/>}/> */}
         <Router/>
         {/* </Route> */}
         {/* <Route path="*" element={<Navigate to="/" />}/> */}
         {/* </Routes>  */}
         </BrowserRouter>
       </ThemeProvider>
       </HelmetProvider>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
