import React, { useState, useEffect } from 'react';
import supabase from '@sb/client';
import Button from '@ui/ButtonStyled';
import { Session, User } from '@supabase/supabase-js';
import useProfileStore from '@store/useProfileStore';

interface IAccountProps {
    session: Session;
}

const Account: React.FC<IAccountProps> = ({ session }) => {
    const [loading, setLoading] = useState<boolean>(true);

    const username = useProfileStore(state => state.username);
    const setUsername = useProfileStore(state => state.setUsername);
    const website = useProfileStore(state => state.website);
    const setWebsite = useProfileStore(state => state.setWebsite);
    const avatarUrl = useProfileStore(state => state.avatar_url);
    const setAvatarUrl = useProfileStore(state => state.setAvatarUrl);

    useEffect(() => {
        getProfile();
    }, [session]);

    const getProfile = async () => {
        try {
            setLoading(true);
            const user: User = supabase.auth.user() as User;

            let { data, error, status } = await supabase
                .from('profiles')
                .select(`username, website, avatar_url`)
                .eq('id', user.id)
                .single();

            if (error && status !== 406) {
                throw error;
            }

            if (data) {
                setUsername(data.username);
                setWebsite(data.website);
                setAvatarUrl(data.avatar_url);
            }
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    const updateProfile = async e => {
        e.preventDefault();

        try {
            setLoading(true);
            const user: User = supabase.auth.user() as User;

            const updates = {
                id: user.id,
                username,
                website,
                avatar_url: avatarUrl,
                updated_at: new Date(),
            };

            let { error } = await supabase.from('profiles').upsert(updates, {
                returning: 'minimal',
            });

            if (error) {
                throw error;
            }
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div aria-live='polite'>
            {loading ? (
                'Saving ...'
            ) : (
                <form onSubmit={updateProfile} className='form-widget'>
                    <div>Email: {(session.user || {}).email}</div>
                    <div>
                        <label htmlFor='username'>Name</label>
                        <input
                            id='username'
                            type='text'
                            value={username || ''}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='website'>Website</label>
                        <input
                            id='website'
                            type='url'
                            value={website || ''}
                            onChange={e => setWebsite(e.target.value)}
                        />
                    </div>
                    <div>
                        <Button label='Update profile' disabled={loading} />
                    </div>
                </form>
            )}
            <Button label='Sign Out' onClick={() => supabase.auth.signOut()} />
        </div>
    );
};

export default Account;