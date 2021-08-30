import styled, { css } from 'styled-components';
import { COLORS } from '../../style/global';

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

export const ButtonOutline = styled.button`
  border: 1px solid ${COLORS.BGY};
  color: ${COLORS.TG};
`;
