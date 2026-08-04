import { createContext } from 'react';
import { PlaceContextType } from '../utils/types';

const PlaceContext = createContext<PlaceContextType>({
    places: [],
    setPlaces: () => { },
    addPlace: () => { },
    deletePlace: () => { },
});


export { PlaceContext };
