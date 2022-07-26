import styled from "styled-components";

interface IProps {
  isActive?: boolean
}

export const ListTasks = styled.aside`
    grid-area: tarefas;
    height: 100%;

     
    h2 {
      font-size: 1.25rem;
      margin-top: 12px;
      margin-bottom: 12px;
    }
  
    ul {
      max-height: 350px;
      overflow-y: scroll;
        scrollbar-width: thin;
    }
  
    @media screen and (min-width:1280px) {
      
      h2{
        text-align: center;
        font-size: 2.25rem;
        margin-bottom: 24px;
        color: #fff;
      }
  
      ul {
        overflow: auto;
        max-height: 500px;
      }
    }
  
  .itemSelecionado {
    background-color: #292929;
    box-shadow: 2px 4px 4px #0000009F inset;
  }
  
  .itemCompletado {
    background-color: #566F42;
    cursor: auto;
  
    .concluido {
      display: block;
      background-image: url('../../assets/img/check-mark.svg');
      background-repeat: no-repeat;
      background-size: 38px 38px;
      position: absolute;
      top: 50%;
      right: 12px;
      transform: translateY(-50%);
      width: 42px;
      height: 43px;
    }
  }
`

export const ListLi = styled.li<IProps>`
  background-color: #4D4D4D;
    border-radius: 8px;
    color: #ccc;
    box-shadow: 2px 4px 4px #0000009F;
    padding: 12px;
    margin-bottom: 8px;
    position: relative;
    cursor: pointer;
    
    ${({isActive}) => isActive ? `
      background-color: red;
    `: `
      background-color: blue;
    `}
  
    h3 {
      margin-bottom: 8px;
      word-break: break-all;
    }
  
    span {
      color: #D0D0D0;
    }
  
    @media screen and (min-width:1280px) {
      font-size: 1.8rem;
    }
`

