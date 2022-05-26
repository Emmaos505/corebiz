import React, { useContext } from 'react';
import { DataContext } from '../../../../../../Context/data-context';
import styles from './styles';

const BuyButton = () => {

    const dataContext = useContext(DataContext);
    const { addToCart } = dataContext;
    const handleClick = () => {
        addToCart();
    };

    return (
        <styles.Wrapper onClick={handleClick}>Comprar</styles.Wrapper>
    )
}

export default BuyButton;