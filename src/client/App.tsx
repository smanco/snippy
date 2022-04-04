import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Helmet } from 'react-helmet';
import Container from '@styles/ContainerStyle';
import { theme } from '@styles/theme/default';
import { Global } from '@emotion/react';
import { globalStyles } from '@styles/theme/default/globalStyles';
import Home from '@pages/Home';

const App: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Code Snippets - Home page</title>
                <meta name='description' content='Code Snippets home page' />
            </Helmet>
            <ThemeProvider theme={theme}>
                <Global styles={globalStyles} />
                <Container>
                    <Home />
                </Container>
            </ThemeProvider>
        </>
    );
};

export default App;
