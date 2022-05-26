import styled from 'styled-components';

export default {
    Wrapper: styled.button`
    font-family: 'Nunito', sans-serif;
    background-color:transparent;
    border: none;
    border-radius:5px;
    background-color:#000000;
    width: 125px;
    height: 32px;
    color:#FFFFFF;
    font-size: 12px;
    text-align:center;
    text-transform:uppercase;
    font-weight:700;
    cursor: pointer;

    &:focus,
    &:active {
        outline:none;
    }
    `
}