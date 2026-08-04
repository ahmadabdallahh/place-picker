import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import type { ModalHandle, ModalProps } from '../utils/types';

const Modal = forwardRef<ModalHandle, ModalProps>(function Modal({ children }, ref) {
    const dialog = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialog.current?.showModal();
            },
            close: () => {
                dialog.current?.close();
            },
        };
    });

    return createPortal(
        <dialog className="modal" ref={dialog}>
            {children}
        </dialog>,
        document.getElementById('modal')!
    );
});

export default Modal;
