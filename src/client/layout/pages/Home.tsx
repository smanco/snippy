import React from 'react';
import Button from '@ui/ButtonStyled';
import { useAtom } from 'jotai';
import { counterAtom } from '@atoms/counterAtom';

const Home = () => {
    const [counter, setCounter] = useAtom(counterAtom);

    const handleClick = () => {
        setCounter(number => number + 1);
      };
  return (
    <>
        <h1>Snippy</h1>
        <h2>the code snippets manager</h2>
        <hr />
        <h3>TODO LIST</h3>
        <h5>CLIENT</h5>
        <ul>
            <li><del>Emotion</del></li>
            <li><del>Jotai</del></li>
        </ul>
        <h5>SERVER</h5>
        <ul>
            <li>Express/Fastify</li>
            <li>[GraphQL - Apollo]</li>
            <li>Prisma</li>
            <li>Postgresql</li>
        </ul>
        <hr />
        <Button label={`Counter: ${counter}`} onClick={handleClick} />
    </>
  )
}

export default Home;