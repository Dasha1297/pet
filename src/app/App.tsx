import { classNames } from "shared/lib/classNames/classNames";
import { useThemeResult } from "./providers/ThemeProvider";
import './styles/index.scss'
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";

const App = () =>{
 
  const {theme} = useThemeResult()
  
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar/>
        <div className="content-page">
          <Sidebar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  )
}

export default App;
