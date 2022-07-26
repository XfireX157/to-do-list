import styled from 'styled-components'

const Media = {
    Laptop: "@media(max-width: 1024px)"
}

export const NewTask = styled.form`
    display:flex;
    flex-direction: column;
    grid-area: nova-tarefa;
    background-color: #7687A1;
    border-radius: 10px;
    box-shadow: 2px 4px 4px #0000009F;
    padding: 12px;  

    ${Media.Laptop}{
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        font-size: 2.25rem;
        padding: 24px;
        box-sizing: border-box;
    }
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;

    label {
      margin-bottom: 8px;
      font-size: 1.25rem;
    }

    ${Media.Laptop}{
        width: calc(60% - 12px);

        &:last-of-type {
        width: 40%;
        }

        label {
        font-size: 2rem;
      }
    }
`