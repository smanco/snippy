import React from 'react';
import Button from '@ui/ButtonStyled';
import useCountStore from '@store/useCountStore';

const Home = () => {
    const count = useCountStore(state => state.count);
    const increment = useCountStore(state => state.increment);

    return (
        <>
            <h1>Snippy</h1>
            <h2>the code snippets manager</h2>
            <hr />
            <h3>TODO LIST</h3>
            <h5>CLIENT</h5>
            <ul>
                <li>
                    <del>Emotion</del>
                </li>
                <li>
                    <del>Zunstand</del>
                </li>
            </ul>
            <h5>SERVER</h5>
            <ul>
                <li>Express/Fastify</li>
                <li>[GraphQL - Apollo]</li>
                <li>Prisma</li>
                <li>Postgresql</li>
            </ul>
            <hr />
            <Button label={`Counter: ${count}`} onClick={increment} />
        </>
    );
};

export default Home;
