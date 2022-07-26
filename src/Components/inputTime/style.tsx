import styled from "styled-components";
import { IProps } from "./Types/IProps";

const Media = {
    Laptop: "@media(max-width: 1024px)"
}

export const Input = styled.input<IProps>`
    width: 100%;
    padding: 8px 12px 4px;
    box-sizing: border-box;
    border: unset;
    border-radius: 5px;
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.textColor};
    box-shadow: 0px 2px 4px #2D2B2B9F inset;

    &::placeholder{
        color: ${(props) => props.placeHolderColor};
    }

    ${Media.Laptop}{
        height: 100%;
        font-size: 1.75rem;
    }
`