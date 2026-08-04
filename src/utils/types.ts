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
    type: 'picked' | 'available';
    fallbackText?: string;
};

type ModalHandle = {
    open: () => void;
    close: () => void;
};

type ModalProps = {
    children: ReactNode;
};

type PlaceContextType = {
    places: Place[];
    availablePlaces: Place[];
    addPlace: (id: string) => void;
    removePlace: () => void;
    startRemovePlace: (id: string) => void;
    stopRemovePlace: () => void;
};

export type {
    Place,
    PlacesProps,
    ModalHandle,
    ModalProps,
    PlaceContextType,
};
