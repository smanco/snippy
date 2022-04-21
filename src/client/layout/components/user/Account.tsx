import React, { useState, useEffect } from 'react';
import supabase from '@sb/client';
import Button from '@ui/ButtonStyled';
import { User } from '@supabase/supabase-js';
import useProfileStore from '@store/useProfileStore';
import LabelStyled from '@styles/components/user/LabelStyled';
import UserFormStyled from '@styles/components/user/UserFormStyled';
import InputStyled from '@styles/components/user/InputStyled';

const Account: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);

    const username = useProfileStore(state => state.username);
    const setUsername = useProfileStore(state => state.setUsername);
    const website = useProfileStore(state => state.website);
    const setWebsite = useProfileStore(state => state.setWebsite);
    const avatarUrl = useProfileStore(state => state.avatar_url);
    const setAvatarUrl = useProfileStore(state => state.setAvatarUrl);
    const session = useProfileStore(state => state.session);

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
        <div>
            {loading
                ? 'Saving ...'
                : session && (
                      <UserFormStyled onSubmit={updateProfile}>
                          <div>
                              Email:
                              <br />
                              {(session.user || {}).email}
                          </div>
                          <LabelStyled htmlFor='username'>Name</LabelStyled>
                          <InputStyled
                              id='username'
                              type='text'
                              value={username || ''}
                              onChange={e => setUsername(e.target.value)}
                          />
                          <br />
                          <LabelStyled htmlFor='username'>Website</LabelStyled>
                          <InputStyled
                              id='website'
                              type='url'
                              value={website || ''}
                              onChange={e => setWebsite(e.target.value)}
                          />
                          <br />
                          <Button label='Update profile' disabled={loading} />
                          <br />
                          <Button label='Sign Out' onClick={() => supabase.auth.signOut()} />
                      </UserFormStyled>
                  )}
        </div>
    );
};

export default Account;
