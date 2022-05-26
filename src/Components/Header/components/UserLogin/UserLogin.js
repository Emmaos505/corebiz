import React from 'react';
import Icon from '../../../Icon';
import styles from './styles';

const UserLogin = () => {
    return (
        <styles.Wrapper>
            <Icon imageProps={{ src: 'userIcon', width: 24, alt: 'login' }} />
            <styles.Text>Mi Cuenta</styles.Text>
        </styles.Wrapper>
    )
}

export default UserLogin