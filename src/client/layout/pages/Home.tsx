import React, { useEffect } from 'react';
import User from '@components/user';
import useProfileStore from '@store/useProfileStore';
import { Helmet } from 'react-helmet';
import Auth from '@components/user/Auth';
import Content from '@components/snippets/Content';
import supabase from '@sb/client';
import Spinner from '@components/common/Spinner';

const Home: React.FC = () => {
    const session = useProfileStore(state => state.session);
    const setSession = useProfileStore(state => state.setSession);

    useEffect(() => {
        setSession(supabase.auth.session());
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    return (
        <>
            <Helmet>
                <title>Code Snippets - Home page</title>
                <meta name='description' content='Code Snippets home page' />
            </Helmet>
            {!session || !session.user ? <Auth /> : <Content />}
        </>
    );
};

export default Home;
