import React, { useState } from 'react';
import BottomCard from './components/BottomCard';
import TopCard from './components/TopCard';
import styles from './styles';

const ProductCard = ({ stars, productName, installments, listPrice, price, imageUrl }) => {

    const [hover, setHover] = useState(false);
    const handleHover = () => {
        setHover(!hover);
    };

    const hasDiscount = () => {
        const bothPrices = listPrice && price;
        if (bothPrices) return listPrice > price;
        return false;
    }

    return (
        <styles.Wrapper onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <TopCard
                hasDiscount={hasDiscount()}
                imageUrl={imageUrl}
            />
            <BottomCard
                stars={stars}
                productName={productName}
                hover={hover}
                installments={installments}
                hasDiscount={hasDiscount()} 
                listPrice={listPrice}
                price={price}
            />
        </styles.Wrapper>
    )
}

export default ProductCard;