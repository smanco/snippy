import React from 'react';
import { useState } from 'react';
import Button from '@ui/ButtonStyled';
import supabase from '@sb/client';

const Auth: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');

    const handleLogin = async e => {
        e.preventDefault();

        try {
            setLoading(true);
            const { error } = await supabase.auth.signIn({ email });
            if (error) throw error;
            alert('Check your email for the login link!');
        } catch (error) {
            alert(error.error_description || error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='row flex flex-center'>
            <div className='col-6 form-widget' aria-live='polite'>
                <p className='description'>Sign in via magic link with your email below</p>
                {loading ? (
                    'Sending magic link...'
                ) : (
                    <form onSubmit={handleLogin}>
                        <label htmlFor='email'>Email</label>
                        <input
                            id='email'
                            className='inputField'
                            type='email'
                            placeholder='Your email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Button label='Send magic link' />
                    </form>
                )}
            </div>
        </div>
    );
};

export default Auth;
