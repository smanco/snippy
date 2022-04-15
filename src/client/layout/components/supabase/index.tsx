import React, { useEffect } from 'react';
import supabase from '@sb/client';
import Auth from '@components/supabase/Auth';
import Account from '@components/supabase/Account';
import SupabaseAppStyled from '@styles/components/supabase/index';
import useProfileStore from '@store/useProfileStore';

const Supabase: React.FC = () => {
    const session = useProfileStore(state => state.session);
    const setSession = useProfileStore(state => state.setSession);

    useEffect(() => {
        setSession(supabase.auth.session());
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    return (
        <SupabaseAppStyled>
            {!session || !session.user ? <Auth /> : <Account key={session.user.id} session={session} />}
        </SupabaseAppStyled>
    );
};

export default Supabase;
