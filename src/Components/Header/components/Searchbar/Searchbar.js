import React from 'react';
import styles from './styles.js';

const Searchbar = () => {
    return (
        <styles.Wrapper >
            <styles.Input placeholder='¿Qué estás buscando?' />
            <styles.IconSearch imageProps={{ src: 'searchIcon', alt: 'searchIcon' }} />
        </styles.Wrapper>
    )
}

export default Searchbar