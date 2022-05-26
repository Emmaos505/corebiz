import React from 'react';
import Icon from '../Icon';
import Template from '../Template';
import styles from './styles';

const Footer = () => {
    return (
        <styles.Wrapper>
            <Template>
                <styles.ContentWrapper>
                    <styles.UbicationWrapper>
                        <styles.Title>Ubicación</styles.Title>
                        <styles.Address>Avenida Andrômeda, 2000. Bloco 6 e 8</styles.Address>
                        <styles.State>Alphavile SP</styles.State>
                        <styles.Mail>brasil@corebiz.ag</styles.Mail>
                        <styles.Telephone>+55 11 3090 1039</styles.Telephone>
                    </styles.UbicationWrapper>
                    <styles.ButtonsWrapper>
                        <styles.Button><styles.PhoneIcon imageProps={{ src: 'messageIcon', alt: 'phone', width: 15 }} />CONTÁCTANOS</styles.Button>
                        <styles.Button><styles.MessageIcon imageProps={{ src: 'phoneIcon', alt: 'message', width: 15 }} />HABLA CON UN CONSULTOR</styles.Button>
                    </styles.ButtonsWrapper>
                    <styles.LegalWrapper>
                        <styles.LogoFooterWrapper>
                            <styles.Text>Desarrollado por</styles.Text>
                            <styles.SiteLogo imageProps={{ src: 'siteLogoIconFooter', alt: 'Corebiz', width: 80 }} />
                        </styles.LogoFooterWrapper>
                        <styles.VtexLogoWrapper>
                            <styles.Text>Powered by</styles.Text>
                            <styles.VtexLogo imageProps={{ src: 'vtexIcon', alt: 'Vtex', width: 24 }} />
                        </styles.VtexLogoWrapper>
                    </styles.LegalWrapper>
                </styles.ContentWrapper>
            </Template>
        </styles.Wrapper>
    )
}

export default Footer;


