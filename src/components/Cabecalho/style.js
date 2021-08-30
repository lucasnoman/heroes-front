import styled from 'styled-components';
import { COLORS } from '../../style/global';

export const Header = styled.header`
  width: 100vw;
  /* height: 12.78%; */
  height: 115px;

  background-color: ${COLORS.BG2};
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;

    li {
      list-style: none;

      a {
        text-decoration: none;
        color: ${COLORS.TG};
        margin: 0 16px 0 0;

        &::last-child {
          margin: 0;
        }

        &:hover {
          filter: brightness(70%);
          transition: 0.2s ease;
        }
      }
    }
  }

  div {
    width: 80%;
    max-width: 1152px;
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
  }
`;
