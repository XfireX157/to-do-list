import styled from 'styled-components'

import { IProps } from './Types/props'

export const Btn = styled.button<IProps>`
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.txtColor};
    padding: 20px;
    border-radius: 10px;
    box-shadow: 2px 4px 4px #0000009F;
    cursor: pointer;
    font-size: 1.25rem;
    padding: 16px;
    width: 150px;
    align-self: center;
        &:active {
            box-shadow: 2px 2px 4px #0000009F inset;
        }

        @media screen and (min-width: 1280px) {
            .botao {
            grid-column-start: span 2;
            justify-self: center;
            width: 200px;
            font-size: 2.25rem;
        }
  }
`   
  
    

  
