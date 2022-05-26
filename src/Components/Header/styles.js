import styled from 'styled-components';
import Cart from './components/Cart';

export default {
    Wrapper: styled.nav`
      padding: 9px 0px 20px 0px;
    `,
    HeaderDesktop: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `,
    CartComponent : styled(Cart)`
        margin-left: 21px;
    ` 
};