import styled from "styled-components";

export const Container = styled.div`
    position: absolute !important;
    width: 100vw; 
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(3px);
    display: flex;
    justify-content: center;
    align-items:center;
    
`

export const Content = styled.div`
       height: 400px;
    width: 600px;
    background-color: #ffff;
    border-radius: 24px;
    display: flex;
    justify-content: space-between;
    align-items: self-end;
    flex-direction: column;
`

export const Input = styled.input`
    font-size: 24px;
    font-weight: 600;
    color: #000000;
    
    `