import type { ReactNode } from 'react';

type Place = {
    id: string;
    title: string;
    image: {
        src: string;
        alt: string;
    };
    lat: number;
    lon: number;
};

type PlacesProps = {
    title: string;
    places: Place[];
    fallbackText?: string;
    onSelectPlace: (id: string) => void;
};

type ModalHandle = {
    open: () => void;
    close: () => void;
};

type ModalProps = {
    children: ReactNode;
};

type DeleteConfirmationProps = {
    onConfirm: () => void;
    onCancel: () => void;
};

type PlaceContextType = {
    places: Place[];
    setPlaces: (places: Place[]) => void;
    addPlace: (id: string) => void;
    deletePlace: (id: string) => void;
};

export type {
    Place,
    PlacesProps,
    ModalHandle,
    ModalProps,
    DeleteConfirmationProps,
    PlaceContextType,
};
