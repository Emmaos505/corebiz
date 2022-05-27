import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DataContext = createContext({
    products: [],
    addToCart: () => { },
    itemsOnCart: 0,
    userData: {},
    changeDataUser: () => { },
    handleSubmit: () => { }
});

export const DataContextProvider = ({ children }) => {
    const [apiProducts, setApiProducts] = useState([]);
    const [itemsOnCart, setItemsOnCart] = useState(0);
    const [userData, setUserData] = useState({ userName: null, userEmail: null });
    const [error, setError] = useState({ success: false, error: false, message: null });
    const keyName = 'itemsOnCart';
    const valueOnLocalStorage = localStorage.getItem(keyName) || null;

    const addToCart = () => {
        if (valueOnLocalStorage) {
            const newQuantity = parseInt(valueOnLocalStorage) + 1;
            localStorage.setItem(keyName, newQuantity);
        }
        setItemsOnCart(itemsOnCart + 1);
    }

    const changeDataUser = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value })
    };

    const getItemsOnLocalStorage = () => {
        if (valueOnLocalStorage) {
            setItemsOnCart(parseInt(valueOnLocalStorage));
        } else {
            localStorage.setItem(keyName, itemsOnCart);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const apiNewsletter = 'https://corebiz-test.herokuapp.com/api/v1/newsletter';
        const regExEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        const { userName, userEmail } = userData;
        if (!userName || !regExEmail.test(userEmail)) { setError({ success: false, error: true, message: 'Por favor ingrese datos validos' }); return; };
        if (userName && regExEmail.test(userEmail)) {
            const body = {
                name: userName,
                email: userEmail
            };
            axios.post(apiNewsletter, body)
                .then(resp => {
                    if (resp.statusText === 'OK') {
                        setUserData({ userName: null, userEmail: null });
                        setError({ success: true, error: false, message: 'Formulario enviado correctamente' })
                    }
                });
        };

    }

    const getProducts = async () => {
        const products = await axios.get('https://corebiz-test.herokuapp.com/api/v1/products');
        setApiProducts(products.data);
    };

    const contextValue = {
        products: apiProducts,
        addToCart,
        itemsOnCart,
        changeDataUser,
        userData,
        handleSubmit,
        error
    };

    useEffect(() => {
        getItemsOnLocalStorage();
        getProducts();
    }, []);

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    )
}