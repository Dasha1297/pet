import { classNames } from "shared/lib/classNames/classNames";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { Suspense, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { useThemeResult } from "./providers/ThemeProvider";
import './styles/index.scss'
import { AppRouter } from "./providers/router";


const App =()=>{
 
  const {theme, toggleTheme} = useThemeResult()
  
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme} type="button">TOGGLE</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <AppRouter/>
    </div>
  )
}

export default App;