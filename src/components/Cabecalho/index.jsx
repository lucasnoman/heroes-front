import React from 'react';
import { Header } from './style';

export const Cabecalho = () => {
  return (
    <div>
      <Header>
        <div>
          <ul>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Cadastro de personagem</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href='#'>Logoff</a>
            </li>
          </ul>
        </div>
      </Header>
    </div>
  );
};
