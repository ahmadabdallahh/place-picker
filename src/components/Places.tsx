import { AVAILABLE_PLACES } from '../data';
import { usePlace } from '../context/usePlace';
import type { PlacesProps } from '../utils/types';

export default function Places({ title, type, fallbackText }: PlacesProps) {
    const { places: pickedPlaces, startRemovePlace, addPlace } = usePlace();

    const places = type === 'picked' ? pickedPlaces : AVAILABLE_PLACES;
    const onSelectPlace = type === 'picked' ? startRemovePlace : addPlace;

    return (
        <section className="places-category">
            <h2>{title}</h2>
            {places.length === 0 && <p className='fallback-text'>{fallbackText}</p>}
            {places.length > 0 && (
                <ul className="places">
                    {places.map((place) => (
                        <li key={place.id} className="place-item">
                            <button onClick={() => onSelectPlace(place.id)}>
                                <img src={place.image.src} alt={place.image.alt} />
                                <h3>{place.title}</h3>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
