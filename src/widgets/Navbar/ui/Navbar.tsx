import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/UI/Button/Button';
import { Modal } from 'shared/UI/Modal/Modal';
import cls from './Nabbar.module.scss';

interface NavbarProps {
    className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModalOpen((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button theme={ThemeButton.CLEAR_INVERTED} onClick={onToggleModal}>
                {t('Войти')}
            </Button>
            <Modal
                isOpen={isAuthModalOpen}
                onClose={onToggleModal}
                // eslint-disable-next-line i18next/no-literal-string
            >
                fhhhhhh
            </Modal>
        </div>
    );
};
