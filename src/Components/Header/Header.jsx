import React from 'react'
import useDevices from '../../hooks/useDevices';
import Template from '../Template';
import Searchbar from './components/Searchbar'
import HeaderMobile from './components/HeaderMobile';
import UserLogin from './components/UserLogin';
import styles from './styles';
import Icon from '../Icon';

const Header = () => {

  const device = useDevices();
  const isTablet = device.tablet;

  return (
    <Template>
      <styles.Wrapper isTablet={isTablet} >
        {isTablet ? (
          <>
            <HeaderMobile />
            <Searchbar />
          </>
        ) : (
          <styles.HeaderDesktop>
            <Icon imageProps={{ src: 'siteLogoIconHeader', width: 117, alt: 'Menu Icon' }} />
            <Searchbar />
            <UserLogin />
            <styles.CartComponent />
          </styles.HeaderDesktop>
        )}
      </styles.Wrapper>
    </Template>
  )
}

export default Header