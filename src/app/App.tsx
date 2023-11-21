import { classNames } from "shared/lib/classNames/classNames";
import { useThemeResult } from "./providers/ThemeProvider";
import './styles/index.scss'
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";


const App =()=>{
 
  const {theme,} = useThemeResult()
  
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar/>
      <AppRouter/>
    </div>
  )
}

export default App;
