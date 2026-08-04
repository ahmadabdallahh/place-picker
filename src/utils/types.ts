import type { ReactNode } from 'react';

export type Place = {
    id: string;
    title: string;
    image: {
        src: string;
        alt: string;
    };
    lat: number;
    lon: number;
};

export type PlacesProps = {
    title: string;
    places: Place[];
    fallbackText?: string;
    onSelectPlace: (id: string) => void;
};

export type ModalHandle = {
    open: () => void;
    close: () => void;
};

export type ModalProps = {
    children: ReactNode;
};

export type DeleteConfirmationProps = {
    onConfirm: () => void;
    onCancel: () => void;
};
