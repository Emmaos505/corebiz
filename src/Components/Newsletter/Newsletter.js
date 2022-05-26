import React, { useContext } from 'react';
import { DataContext } from '../../Context/data-context';
import styles from './styles';

const Newsletter = () => {

    const dataContext = useContext(DataContext);
    const { changeDataUser, userData, handleSubmit, error: errorNewsletter } = dataContext;
    const { userName, userEmail } = userData;
    const { success, error, message } = errorNewsletter;
    let colorMessage = null;

    if (success || error) {
        colorMessage = !success ? '#F8475F' : '#22bb33';
    }

    return (
        <styles.Wrapper>
            <styles.Title>
                ¡Únete a nuestras novedades y promociones!
            </styles.Title>
            <styles.Form>
                <styles.Input value={userName} onChange={changeDataUser} type='text' name='userName' placeholder='Ingresa tu nombre'></styles.Input>
                <styles.Input value={userEmail} onChange={changeDataUser} type='text' name='userEmail' placeholder='Ingresa tu mail'></styles.Input>
                <styles.Button onClick={handleSubmit} >Suscribirme</styles.Button>
            </styles.Form>
            <styles.MessageSuccess>
                <styles.Message colorMessage={colorMessage}>{message && message}</styles.Message>
            </styles.MessageSuccess>
        </styles.Wrapper>
    )
}

export default Newsletter