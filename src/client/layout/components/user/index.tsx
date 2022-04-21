import React from 'react';
import Account from './Account';
import useProfileStore from '@store/useProfileStore';

const Supabase: React.FC = () => {
    const session = useProfileStore(state => state.session);
    return session && session.user && <Account key={session.user.id} />;
};

export default Supabase;
