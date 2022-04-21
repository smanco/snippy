import React from 'react';
import User from '@components/user';
import useProfileStore from '@store/useProfileStore';
import List from '@components/snippets/List';
import { Helmet } from 'react-helmet';
import ContentStyled from '@styles/components/snippets/ContentStyled';

const Content: React.FC = () => {
    const session = useProfileStore(state => state.session);
    return (
        <>
            <Helmet>
                <title>Code Snippets - Home page</title>
                <meta name='description' content='Code Snippets home page' />
            </Helmet>
            <ContentStyled>
                <List />
                <User />
            </ContentStyled>
        </>
    );
};

export default Content;
