import React from 'react';
import { priceFormatted } from '../../../../../../utils/utils';
import BuyButton from '../BuyButton';
import Rating from '../Rating';
import styles from './styles';

const BottomCard = ({ stars, productName, hover, installments, listPrice, price }) => {

    const hasQuotas = installments && !!installments.length;
    let quotasMessage = null;

    if (hasQuotas) {
        const { quantity, value } = installments[0];
        const priceOfQuota = priceFormatted(value);
        quotasMessage = `ou em ${quantity}x de R$${priceOfQuota}`;
    }

    return (
        <styles.Wrapper hover={hover} >
            <styles.Name>{productName}</styles.Name>
            <Rating stars={stars} />
            <styles.ListPrice>{listPrice && priceFormatted(listPrice)}</styles.ListPrice>
            <styles.Price>{price && priceFormatted(price)}</styles.Price>
            <styles.Quota>{hasQuotas && quotasMessage && quotasMessage}</styles.Quota>
            <styles.WrapperButton>
                {hover && <BuyButton />}
            </styles.WrapperButton>
        </styles.Wrapper>
    )
}

export default BottomCard;

