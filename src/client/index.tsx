import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container: HTMLElement = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
const AppWithCallbackAfterRender = () => {
    useEffect(() => {
        console.log('rendered');
    });
    return <App />;
};
root.render(<AppWithCallbackAfterRender />);
