import styled from 'styled-components';

export default {
    Wrapper: styled.div`
     background-color: ${(({ hover }) => hover ? '#E6E8EA' : '#FFFFFF')};
     height: 153px;
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
    `,
    Name: styled.p`
    font-size: 12px;
    text-align: center;
    color: #7A7A7A;
    font-weight: 600;
    min-height: 17px;
    margin-bottom: 3px;
    `,
    ListPrice: styled.p`
    font-size: 12px;
    text-align: center;
    color: #7A7A7A;
    font-weight: 400;
    min-height: 14px;
    margin-bottom: 3px;
    `,
    Price: styled.p`
    font-size: 18px;
    text-align: center;
    font-weight: 800;
    min-height: 21px;
    margin-bottom: 3px;
    `,
    Quota: styled.p`
    font-size: 11px;
    color: #7A7A7A;
    text-align: center;
    font-weight: 400;
    min-height: 12px;
    margin-bottom: 3px;
    `,
    WrapperButton: styled.div`
    height: auto;
    min-height: 32px;
    `
}