import styled from 'styled-components';

export default {
    Wrapper: styled.div`
    height: 200px;
    width: 100%;
    position: relative;
        `,
    HighLight: styled.div`
    border-color: transparent #F8475F transparent transparent;
    border-style: solid;
    border-width: 0px 81px 81px 0px;
    height: 0px;
    width: 0px;
    position: absolute;
    right: 0px;
    top: 0px;
    color: #FFFFFF;
    `,
    Text: styled.span`
    font-size: 16px;
    font-weight: 900;
    text-transform: uppercase;
    text-align:center;
    position: absolute;
    right: 10px;
    top: 10px;
    color: #ffffff;
    `,
    Image: styled.img`
    height: 100%;
    width: auto;
    `
}

