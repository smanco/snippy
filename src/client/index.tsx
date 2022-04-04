import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
const AppWithCallbackAfterRender = () => {
    useEffect(() => {
        console.log('rendered');
    });
    return <App />;
};
root.render(<AppWithCallbackAfterRender />);
