import React from 'react';
import Supabase from '@components/supabase';
import useProfileStore from '@store/useProfileStore';
import List from '@components/snippets/List';

const Home: React.FC = () => {
    const session = useProfileStore(state => state.session);
    return (
        <>
            <h1>Snippy</h1>
            <h2>the code snippets manager</h2>
            <hr />
            <Supabase />
            <hr />
            {session && session.user && <List />}
        </>
    );
};

export default Home;
