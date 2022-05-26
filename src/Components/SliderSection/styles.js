import styled from 'styled-components';

export default {
    Wrapper: styled.main`
        width: 100%;
        height: auto;
        padding: 53px 0px 43px 0px;

    `,
    Title: styled.h3`
font-size:  20px;
text-align: left;
   font-weight: 900;
   color: #000000;
   margin-bottom: 20px;
   

   &::after{
       content:'';
       font-size: 0px;
       height: 5px;
       width: 65px;
       background-color: #C0C0C0;
       display: block;
   }

    `
}