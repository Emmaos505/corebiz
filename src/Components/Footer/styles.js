import styled from 'styled-components';
import Icon from '../Icon';

export default {
  Wrapper: styled.div`
    width: 100%;
    background-color: #000000;
    padding: 25px 0px;
    `,
  Title: styled.h3`
    font-size:  20px;
    text-align: left;
    font-weight: 900;
    color: #FFFFFF;
    margin-bottom: 20px;
           
    &::after{
      content:'';
      font-size: 0px;
      height: 5px;
      width: 65px;
      background-color: #FFFFFF;
      display: block;
    }`,
  Address: styled.p`
    font-size: 13px;
    text-align: left;
    font-weight: 400;
    color: #ffffff;
    margin-bottom: 5px;
    `,
  State: styled.p`
    font-size: 13px;
    text-align: left;
    font-weight: 400;
    color: #ffffff;
    margin-bottom: 5px;
    `,
  Mail: styled.p`
    font-size: 13px;
    text-align: left;
    font-weight: 400;
    color: #ffffff;
    margin-bottom: 5px;
    `,
  Telephone: styled.p`
    font-size: 13px;
    text-align: left;
    font-weight: 400;
    color: #ffffff;
    `,
  ContentWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1024px) {
        flex-direction: column;
    }
    `,
  UbicationWrapper: styled.div`
        @media screen and (max-width: 1024px) {
        width: 100%;
        max-width: 250px;
        margin: 0px auto 24px auto;
    }
    `,
  ButtonsWrapper: styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
    `,
  Button: styled.button`
    border: none;
    border-radius:5px;
    width: 228px;
    height: 38px;
    background:#FFFFFF;
    color: #000000;
    font-size: 12px;
    text-align: left;
    font-weight: 600;
    display: flex;
    align-items:center;
    justify-content:center;
    margin-bottom: 24px;
    cursor: pointer;
    position: relative;
    `,
  MessageIcon: styled(Icon)`
    position: absolute;
    left: 8px;
    `,
  PhoneIcon: styled(Icon)`
    position: absolute;
    left: 8px;
    `,
  LegalWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    `,
  LogoFooterWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    margin-right: 10px;
    `
  ,
  VtexLogoWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column`
  ,
  Text: styled.p`
    color: #FFFFFF;
    font-size: 10px;
    text-align: left;
    margin-bottom: 10px ;
    `,
  SiteLogo: styled(Icon)``,
  VtexLogo: styled(Icon)``,
}






