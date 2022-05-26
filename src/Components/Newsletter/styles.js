import styled from 'styled-components';

export default {
    Wrapper: styled.div`
    background-color: #F2F2F2;
    width: 100%;
    height: auto;
    padding: 16px 0px 38px 0px;
    `,
    Title: styled.h2`
    font-family: 'Lato', sans-serif;;
    font-size: 22px;
    color: #333333;
    font-weight: 900;
    margin: 0px auto 15px auto;
    text-align: center;
    width: 100%;
    `,
    Form: styled.form`
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
`,

    Input: styled.input`
    font-family: 'Lato', sans-serif;
    font-size: 12px;
    color: #585858;
    font-weight: 600;
    border: none;
    padding: 0px 15px;
    border-radius: 5px;
    text-align: left;
    height: 48px;
    margin-right: 8px;

    &:active,
    &:focus {
        outline: none;
    }
    
    `,
    Button: styled.button`
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    color: #FFFFFF;
    font-weight: 600;
    background-color: #000000;
    border: none;
    text-align: center;
    height: 48px;
    padding: 0px 15px;
    width: 140px;
    cursor: pointer;
    `,
    MessageSuccess: styled.div`
    min-height: 30px;
    padding-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    `,
    Message: styled.p`
    color: ${({ colorMessage }) => colorMessage ? colorMessage : ''}
    `
}