import { Link } from "react-router-dom"
import { classNames } from "shared/lib/classNames/classNames"
import { AppLink, AppLinkTheme } from "shared/UI/AppLink/AppLink"
import cls from "./Nabbar.module.scss"

interface NavbarProps {
  className? : string;
}
export const Navbar =({className}: NavbarProps) => {

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <AppLink to="/" theme={AppLinkTheme.SECONDARY}>Главная</AppLink>
      <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>О сайте</AppLink>
    </div>
  )
}
