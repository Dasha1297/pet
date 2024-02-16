import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Loader.module.scss'

interface Props {
    className?: string
}
export const Loader = ({ className }: Props) => (
    <div className={classNames(cls.Loader, {}, [className])}>
        <div className={cls.loader} />
    </div>
)
