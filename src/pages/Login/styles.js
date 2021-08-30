import styled from 'styled-components';
import { COLORS } from '../../style/global';

const leftImage =
  'https://images.unsplash.com/photo-1515734392280-e60c25eb9f01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80';
// const troopers =
//   'https://images.unsplash.com/photo-1583118443607-33f3731d09e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80';

export const LoginBack = styled.div`
  background-color: ${COLORS.BG2};
  width: 78.3vw;
  height: 100vh;

  display: flex;
  justify-content: space-evenly;

  box-shadow: 1px 1px 2px ${COLORS.BG2};
`;

export const LeftSide = styled.div`
  width: 50%;
  /* border: 1px solid red; */
  background-image: url(${leftImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const RightSide = styled.div`
  width: 50%;
  /* border: 1px solid yellow; */

  input {
    padding: 8px;
    margin: 32px 0 32px 0;
    border: 0;
    border-bottom: 1px solid ${COLORS.TO};
    width: 30vw;
    max-width: 400px;
    background-color: transparent;
    outline: none;
    color: ${COLORS.TG};
    font-size: 16px;

    & + input {
      margin-top: 0;
    }

    &::placeholder {
      font-family: 'Roboto Slab', sans-serif;
      font-size: 16px;
      color: ${COLORS.TO};
    }
  }
`;

export const Button = styled.button`
  width: 30vw;
  max-width: 400px;
  height: 50px;
  margin: 8px;
  font-size: 16px;
  border-radius: 8px;
  background-color: ${props => (props.outline ? 'transparent' : COLORS.BGY)};
  border: ${props => (props.outline ? `1px solid ${COLORS.BGY}` : 0)};
  color: ${props => (props.outline ? '#fff' : '#000')};
`;

export const Image = styled.img`
  object-fit: cover;
  max-width: 100%;
`;

export const Logo = styled.img`
  max-width: 90%;
  height: auto;
  margin-bottom: 81px;
`;

export const CenterForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
