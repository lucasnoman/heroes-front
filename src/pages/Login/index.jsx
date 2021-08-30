import React from 'react';
import { LoginBack, LeftSide, Logo, RightSide, Button } from './styles';
import logo from '../../Logo.svg';

export const Login = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <LoginBack>
        <LeftSide />
        <RightSide>
          <div style={centerForm}>
            <Logo src={logo} alt='Logo do EY Heroes' />
            <form>
              <input type='text' placeholder='Nome de usuário' />
              <input type='password' placeholder='Senha' />
              <br />
              <Button>Entrar</Button>
              <br />
              <Button outline>Cadastrar</Button>
            </form>
          </div>
        </RightSide>
      </LoginBack>
    </div>
  );
};

const centerForm = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '25%',
  textAlign: 'center',
};

// 78.3vw
