import React from 'react';
import { useState } from 'react';
import Button from '@ui/ButtonStyled';
import supabase from '@sb/client';
import { Link } from 'react-router-dom';
import AuthFormStyled from '@styles/components/user/AuthFormStyled';
import LabelStyled from '@styles/components/user/LabelStyled';
import InputStyled from '@styles/components/user/InputStyled';
import AuthTitleStyled from '@styles/components/user/AuthTitleStyled';
import { Helmet } from 'react-helmet';
import Spinner from '@components/common/Spinner';

const Register: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async e => {
        e.preventDefault();

        try {
            setLoading(true);
            const { error } = await supabase.auth.signUp({ email, password });
            if (error) throw error;
            console.error('Check your email for the login link!');
        } catch (error) {
            console.error(error.error_description || error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Helmet>
                <title>Code Snippets - Registration page</title>
                <meta name='description' content='Code Snippets registration page' />
            </Helmet>
            {loading ? (
                <Spinner />
            ) : (
                <AuthFormStyled onSubmit={handleLogin}>
                    <AuthTitleStyled>Register Here</AuthTitleStyled>
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
                    <Button label='Register' />

                    <Link to='/'>Login</Link>
                </AuthFormStyled>
            )}
        </div>
    );
};

export default Register;
