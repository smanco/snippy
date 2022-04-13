import React, { useState, useEffect } from 'react';
import supabase from '@sb/client';
import Auth from '@components/supabase/Auth';
import Account from '@components/supabase/Account';

const Supabase = () => {
    const [session, setSession] = useState(null);
    debugger;
    useEffect(() => {
        setSession(supabase.auth.session());

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    return (
        <div className='container' style={{ padding: '50px 0 100px 0' }}>
            {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
        </div>
    );
};

export default Supabase;
