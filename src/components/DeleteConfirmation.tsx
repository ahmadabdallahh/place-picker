import { usePlace } from '../context/usePlace';

export default function DeleteConfirmation() {
    const { removePlace, stopRemovePlace } = usePlace();

    return (
        <div id="delete-confirmation">
            <h2>Are you sure?</h2>
            <p>Do you really want to remove this place?</p>
            <div id="confirmation-actions">
                <button onClick={stopRemovePlace} className="button-text">
                    No
                </button>
                <button onClick={removePlace} className="button">
                    Yes
                </button>
            </div>
        </div>
    );
}
