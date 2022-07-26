import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
    }
    #root{
        margin:0 auto;
    }

    input {
	font-family: inherit;
	font-size: inherit;
	font-weight: inherit;
	color: inherit;
}

button {
	border: unset;
	background-color: unset;
	font-family: inherit;
	font-size: inherit;
	font-weight: inherit;
	color: inherit; 
}

@import url('https://fonts.googleapis.com/css2?family=Manjari&display=swap');

body {
	display: flex;
	justify-content: center;
	font-family: 'Manjari', sans-serif;
	height: 100%;
	width: 100%;
	box-sizing: border-box;
}

    #root {
        width: 100%;
    }

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: unset;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`