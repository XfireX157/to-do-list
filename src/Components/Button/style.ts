import styled from 'styled-components'

import { IProps } from './Types/props'

export const Btn = styled.button<IProps>`
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.txtColor};
    padding: 20px;
`   