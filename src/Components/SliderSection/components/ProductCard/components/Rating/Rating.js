import React from 'react';
import styles from './styles';

const Rating = ({ stars }) => {

    const starsIcons = [
        <span></span>,
        <span></span>,
        <span></span>,
        <span></span>,
        <span></span>
    ];

    const starsToRender = starsIcons.map((star, idx) => {
        const fullStar = idx < stars ? 'fa fa-star' : 'fa fa-star-o';
        return { ...star, key: idx, props: { ...star.props, className: `${fullStar}` } };
    });


    return (
        <styles.Wrapper>
            {starsToRender}
        </styles.Wrapper>
    )
}

export default Rating;