import React from 'react';
import searchIcon from '../../Assets/searchIcon.svg';
import burguerIcon from '../../Assets/burguerIcon.svg';
import messageIcon from '../../Assets/messageIcon.svg';
import phoneIcon from '../../Assets/phoneIcon.svg';
import siteLogoIconHeader from '../../Assets/siteLogoIconHeader.svg';
import userIcon from '../../Assets/userIcon.svg';
import siteLogoIconFooter from '../../Assets/siteLogoIconFooter.svg';
import shoppingCartIcon from '../../Assets/shoppingCartIcon.svg';
import vtexIcon from '../../Assets/vtexIcon.svg';
import styles from './styles';

const Icon = ({ imageProps, className }) => {

    const { src, width = 24, alt = 'image' } = imageProps;

    let srcIcon;

    switch (src) {
        case 'searchIcon':
            srcIcon = searchIcon;
            break;
        case 'siteLogoIconHeader':
            srcIcon = siteLogoIconHeader;
            break;
        case 'siteLogoIconFooter':
            srcIcon = siteLogoIconFooter;
            break;
        case 'userIcon':
            srcIcon = userIcon;
            break;
        case 'messageIcon':
            srcIcon = messageIcon;
            break;
        case 'phoneIcon':
            srcIcon = phoneIcon;
            break;
        case 'burguerIcon':
            srcIcon = burguerIcon;
            break;
        case 'vtexIcon':
            srcIcon = vtexIcon;
            break;
        case 'shoppingCartIcon':
            srcIcon = shoppingCartIcon;
            break;
        default:
            break;
    }

    return (
        <styles.Image className={className} src={srcIcon} width={width} alt={alt} />
    )
}

export default Icon;