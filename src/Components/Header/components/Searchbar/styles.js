import styled from 'styled-components';
import Icon from '../../../Icon';

export default {
    Wrapper: styled.form`
      margin: 0px auto;
      background-color: red;
      width: 100%;
      max-width: 718px;
      position: relative;
      height: 30px;
      
    `,
    Input: styled.input`
        width: 100%;
        border: none;
        border-bottom: 1px solid #7A7A7A;
        padding-bottom: 5px;
        height: 100%;
        font-size: 13px;
        font-weight: 400;
        
        &::placeholder {
            color: #7A7A7A;
        }

        &:focus, 
        &:active {
            outline: none;
        }
    `,
    IconSearch: styled(Icon)`
        height:auto;
        width:24px;
        position: absolute;
        right: 0px;
        top: 0px;
    `
};


