import React from 'react';
import { useState } from 'react';
import Button from '@ui/ButtonStyled';
import supabase from '@sb/client';
import { Link } from 'react-router-dom';
import AuthFormStyled from '@styles/components/user/AuthFormStyled';
import LabelStyled from '@styles/components/user/LabelStyled';
import InputStyled from '@styles/components/user/InputStyled';
import AuthTitleStyled from '@styles/components/user/AuthTitleStyled';

const Auth: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async e => {
        e.preventDefault();

        try {
            setLoading(true);
            const { error } = await supabase.auth.signIn({ email, password });
            if (error) throw error;
        } catch (error) {
            alert(error.error_description || error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {loading ? (
                '...'
            ) : (
                <AuthFormStyled onSubmit={handleLogin}>
                    <AuthTitleStyled>Login Here</AuthTitleStyled>
                    <LabelStyled htmlFor='email'>Email</LabelStyled>
                    <InputStyled
                        id='email'
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <br />
                    <LabelStyled htmlFor='password'>Password</LabelStyled>
                    <InputStyled
                        id='password'
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <br />
                    <Button label='Login' />

                    <Link to='/register'>Register</Link>
                </AuthFormStyled>
            )}
        </div>
    );
};

export default Auth;
