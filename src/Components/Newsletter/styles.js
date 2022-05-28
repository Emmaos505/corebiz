import styled from 'styled-components';

export default {
    Wrapper: styled.div`
    background-color: #F2F2F2;
    width: 100%;
    height: auto;
    padding: 16px 15px 38px 15px;

    @media screen and (max-width: 1024px) {
        display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    flex-direction: column;
    }

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

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        padding: 0px 20px;
    width: 100%;
    }

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

    @media screen and (max-width: 1024px) {
        width: 100%;
        margin-right: 0px;
    margin-bottom: 10px;
    }

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
    @media screen and (max-width: 1024px) {
        width: 100%;
            }
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