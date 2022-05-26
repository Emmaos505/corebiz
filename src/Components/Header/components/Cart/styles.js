import styled from 'styled-components';

export default {
    Wrapper: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 35px;
        position: relative;

    `,
    ProductCounter: styled.span`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 14px;
        height: 14px;
        background-color: red;
        border-radius: 50%;
        color: #FFFFFF;
        font-size:8px;
        position:absolute;
        right:0px;
    `
};