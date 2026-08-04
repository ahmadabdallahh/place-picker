import ReactDOM from 'react-dom/client';

import App from './App';
import { PlaceProvider } from './context/PlaceContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <PlaceProvider>
        <App />
    </PlaceProvider>
);
