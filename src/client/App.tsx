import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { Helmet } from 'react-helmet';
import Container from '@styles/ContainerStyle';
import { theme } from '@styles/theme/default';
import { Global } from '@emotion/react';
import { globalStyles } from '@styles/theme/default/globalStyles';
import Home from '@pages/Home';
import Register from '@pages/Register';
import Layout from '@components/Layout';
import NotFoundPage from '@pages/NotFoundPage';

const App: React.FC = () => {
    return (
        <Suspense fallback={<div>LOADING...</div>}>
            <ThemeProvider theme={theme}>
                <Global styles={globalStyles} />
                <Container>
                    <Routes>
                        <Route path='/' element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path='register' element={<Register />} />
                            <Route path='*' element={<NotFoundPage />} />
                        </Route>
                    </Routes>
                </Container>
            </ThemeProvider>
        </Suspense>
    );
};

export default App;
