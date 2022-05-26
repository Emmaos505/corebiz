import React, { useContext } from 'react';
import { DataContext } from '../../Context/data-context';
import Template from '../Template';
import Slider from './components/Slider';
import styles from './styles';

const SliderSection = () => {

    const dataContext = useContext(DataContext);
    const { products } = dataContext;

    return (
        <Template>
            <styles.Wrapper>
                <styles.Title>Mas vendidos</styles.Title>
                <Slider products={products} />
            </styles.Wrapper>
        </Template>
    )
}

export default SliderSection