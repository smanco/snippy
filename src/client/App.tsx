import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import Button from '@ui/ButtonStyled';
import Container from '@styles/ContainerStyle';
import { theme } from '@styles/theme/default';
import GlobalStyles from '@styles/theme/default/GlobalStyles';

const App: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Code Snippets - Home page</title>
                <meta name='description' content='Code Snippets home page' />
            </Helmet>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Container>
                    <h1>Snippy</h1>
                    <h2>the code snippets manager</h2>
                    <hr />
                    <h3>TODO LIST</h3>
                    <h5>CLIENT</h5>
                    <ul>
                        <li>EmotionJS</li>
                        <li>Jotai</li>
                    </ul>
                    <h5>SERVER</h5>
                    <ul>
                        <li>Express/Fastify</li>
                        <li>[GraphQL - Apollo]</li>
                        <li>Prisma</li>
                        <li>Postgresql</li>
                    </ul>
                    <hr />
                    <Button label='Button' />
                </Container>
            </ThemeProvider>
        </>
    );
};

export default App;
