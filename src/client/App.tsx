import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import Container from '@styles/ContainerStyle';
import { theme } from '@styles/theme/default';
import { Global } from '@emotion/react';
import { globalStyles } from '@styles/theme/default/globalStyles';
import Home from '@pages/Home';
import Register from '@pages/Register';
import Layout from '@components/Layout';
import NotFoundPage from '@pages/NotFoundPage';
import Spinner from '@components/common/Spinner';

const App = () => {
    return (
        <Suspense fallback={<Spinner />}>
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
