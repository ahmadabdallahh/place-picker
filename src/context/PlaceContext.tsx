import { createContext, useRef, useState, type ReactNode } from 'react';
import { AVAILABLE_PLACES } from '../data';
import type { ModalHandle, Place, PlaceContextType } from '../utils/types';
import Modal from '../components/Modal';
import DeleteConfirmation from '../components/DeleteConfirmation';

const PlaceContext = createContext<PlaceContextType | null>(null);

function PlaceProvider({ children }: { children: ReactNode }) {
    const modal = useRef<ModalHandle>(null);
    const selectedPlace = useRef<string | null>(null);
    const [places, setPlaces] = useState<Place[]>([]);

    function startRemovePlace(id: string) {
        modal.current?.open();
        selectedPlace.current = id;
    }

    function stopRemovePlace() {
        modal.current?.close();
    }

    function addPlace(id: string) {
        setPlaces((prevPlaces) => {
            if (prevPlaces.some((place) => place.id === id)) {
                return prevPlaces;
            }
            const place = AVAILABLE_PLACES.find((place) => place.id === id);
            if (!place) {
                return prevPlaces;
            }
            return [place, ...prevPlaces];
        });
    }

    function removePlace() {
        setPlaces((prevPlaces) =>
            prevPlaces.filter((place) => place.id !== selectedPlace.current)
        );
        modal.current?.close();
    }

    const contextValue: PlaceContextType = {
        places,
        addPlace,
        removePlace,
        startRemovePlace,
        stopRemovePlace,
    };

    return (
        <PlaceContext.Provider value={contextValue}>
            <Modal>
                <DeleteConfirmation />
            </Modal>
            {children}
        </PlaceContext.Provider>
    );
}

export { PlaceContext, PlaceProvider };
