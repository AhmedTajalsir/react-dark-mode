import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    background: ${(({theme})=> theme.body)};
    color: ${(({theme})=> theme.text)};
    font-family: 'Roboto', sans-serif;
    
    transition: all 0.5s linear;
}
.btn-primary{
    background: ${(({theme})=> theme.primary)};
    color: ${(({theme})=> theme.text)};
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    border-radius: 1rem;
    cursor:  pointer;
    outline: none;
    border: none;
    transition: all 0.5s linear;
}
` 
export const lightTheme = {
    body: '#fff',
    text: '#121212',
    primary: '#6200ee',
}

export const darktTheme = {
    body: '#121212',
    text: '#fff',
    primary: '#bb86fc',
}