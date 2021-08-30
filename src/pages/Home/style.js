import styled from 'styled-components';
import { COLORS } from '../../style/global';

export const Container = styled.div`
  width: 80%;
  max-width: 1152px;
  margin: auto;
  /* margin-top: 10%; */

  display: flex;
  justify-content: center;
  flex-direction: column;

  text-align: center;

  /* border: 1px solid red; */

  h1 {
    font-size: 56px;
  }
`;

export const CardGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Card = styled.div`
  width: 217px;
  height: 245px;

  border: 0;
  border-radius: 8px;

  margin-top: 85px;

  background-color: ${COLORS.BGY};

  cursor: pointer;
`;
