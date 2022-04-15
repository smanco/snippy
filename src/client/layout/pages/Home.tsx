import React from 'react';
import Supabase from '@components/supabase';

const Home: React.FC = () => {
    return (
        <>
            <h1>Snippy</h1>
            <h2>the code snippets manager</h2>
            <hr />
            <Supabase />
            <hr />
            <h3>Last snippets</h3>
            <p>...</p>
            <hr />
        </>
    );
};

export default Home;
