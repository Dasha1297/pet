import { Theme, useThemeResult } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Button, ThemeButton } from 'shared/UI/Button/Button';


interface ThemeSwitcherProps {
 className?: string;
}
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const {theme, toggleTheme} = useThemeResult()

 return (
 <Button className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme} theme={ThemeButton.CLEAR}>
    {theme=== Theme.LIGHT ? <LightIcon /> : <DarkIcon/>}
 </Button>
 );
}