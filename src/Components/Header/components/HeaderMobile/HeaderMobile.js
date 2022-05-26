import React from 'react'
import Icon from '../../../Icon';
import Cart from '../Cart';
import styles from './styles';

const HeaderMobile = () => {
    return (
        <styles.Wrapper>
            <Icon imageProps={{ src: 'burguerIcon', width: 24, alt: 'Menu Icon' }} />

            <styles.Logo>
                <Icon imageProps={{ src: 'siteLogoIconHeader', width: 117, alt: 'Corebiz' }} />
            </styles.Logo>

            <Cart />
        </styles.Wrapper>
    )
}

export default HeaderMobile

