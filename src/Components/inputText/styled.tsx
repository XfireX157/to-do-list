import styled from "styled-components";

import {IProps} from './types/propsInput'

export const Input = styled.input.attrs({ type: "text" })<IProps>`
    padding: 10px;
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.textColor}
`;