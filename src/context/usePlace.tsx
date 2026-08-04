import { useContext } from "react";
import { PlaceContext } from "./PlaceContext";

function usePlace() {
    const context = useContext(PlaceContext)

    if (!context) {
        throw new Error('usePlace must be used within a PlaceProvider');
    }

    return context;
}

export { usePlace };
