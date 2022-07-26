import styled from "styled-components";



const Media = {
    LapTop: "@media(max-width: 1280x)"
}

export const StopWatch = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-area: cronometro;
`
export const title = styled.p`
  font-size: 2rem;
  color: #fff;
`

export const WatchWrapper = styled.div`
    align-items: center;
    background-color: #7687A1;
    border-radius: 10px;
    box-shadow: 2px 4px 4px #0000009F;
    box-sizing: border-box;
    display: flex;
    font-size: 5rem;
    justify-content: center;
    margin-bottom: 24px;
    padding: 16px 12px;
    width: 100%;

    ${Media.LapTop}{
        font-size: 15rem;
    }
`