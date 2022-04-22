import React, { useEffect } from 'react';
import useProfileStore from '@store/useProfileStore';
import { Helmet } from 'react-helmet';
import supabase from '@sb/client';
import NotFoundPageStyled from '@styles/pages/NotFoundPageStyled';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
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
                <title>Code Snippets - Page Not Found</title>
                <meta name='description' content='Code Snippets page not found' />
            </Helmet>
            <NotFoundPageStyled>
                <div>
                    <h1>Error 404 - Page Not Found</h1>
                    <p>
                        <Link to='/'>Back to homepage</Link>
                    </p>
                </div>
            </NotFoundPageStyled>
        </>
    );
};

export default NotFoundPage;
