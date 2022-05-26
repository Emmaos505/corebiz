import React, { useContext } from 'react';
import { DataContext } from '../../../../Context/data-context';
import Icon from '../../../Icon';
import styles from './styles';

const Cart = ({ className }) => {

    const dataContext = useContext(DataContext);
    const { itemsOnCart } = dataContext;

    return (
        <styles.Wrapper className={className} >
            <Icon imageProps={{ src: 'shoppingCartIcon', width: 24, alt: 'shopping cart' }} />
            <styles.ProductCounter>{itemsOnCart}</styles.ProductCounter>
        </styles.Wrapper>
    )
}

export default Cart