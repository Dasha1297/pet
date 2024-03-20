import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
    children: ReactNode;
    element?: HTMLElement;
}

export const Portal = ({ children, element = document.body }: Props) =>
    createPortal(children, element);
