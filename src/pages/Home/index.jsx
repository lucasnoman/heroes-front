import React from 'react';
import { Container, Card, CardGroup } from './style';
import { Cabecalho } from '../../components/Cabecalho';

export const Home = () => {
  return (
    <>
      <Cabecalho />
      <Container>
        <div>
          <h1>Heróis da EY</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            consectetur inventore aperiam quasi officiis. Voluptates magnam
            molestiae laudantium quasi, architecto fugit nulla repellat dolorem
            reprehenderit necessitatibus autem possimus soluta ad!em
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            consectetur inventore aperiam quasi officiis. Voluptates magnam
            molestiae laudantium quasi, architecto fugit nulla repellat dolorem
            reprehenderit necessitatibus autem possimus soluta ad!em
          </p>
        </div>

        <CardGroup>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </CardGroup>
      </Container>
    </>
  );
};
