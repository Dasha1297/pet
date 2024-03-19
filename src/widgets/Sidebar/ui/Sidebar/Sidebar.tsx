import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/UI/AppLink/AppLink';
import { Button, SizeButton, ThemeButton } from 'shared/UI/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import HomeIcon from 'shared/assets/icons/home.svg';
import MenuIcon from 'shared/assets/icons/menu.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
            data-testid="sidebar"
        >
            <Button
                type="button"
                onClick={onToggle}
                data-testid="sidebar-toggle"
                className={cls.collapseBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                size={SizeButton.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <AppLink
                    to="/"
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.item}
                >
                    <HomeIcon className={cls.icon} />
                    <span className={cls.link}>{t('главная')}</span>
                </AppLink>
                <AppLink
                    to="/about"
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.item}
                >
                    <MenuIcon className={cls.icon} />
                    <span className={cls.link}>{t('о сайте')}</span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
