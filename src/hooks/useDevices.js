import { useState, useEffect } from 'react';


const debounce = (fn, timeout) => {
	let timer;
	return (...params) => {
		clearTimeout(timer);
		timer = setTimeout(fn, timeout, ...params);
	};
};

const useDevices = () => {
    const getWindowWidth = () => window.innerWidth;
    const checkDevice = device => getWindowWidth() < device;
    
    const initialWidth = getWindowWidth();
    
    const [width, setWidth] = useState(initialWidth);
    const [tablet, setTablet] = useState(false);

    const handleChanges = debounce(() => {
        const windowWidth = getWindowWidth();
        const isTablet = checkDevice(1024);
        setWidth(windowWidth);
        setTablet(isTablet);
    }, 100);

    useEffect(() => {
        window.addEventListener('resize', handleChanges);

        return () => window.removeEventListener('resize', handleChanges);
    });

    return {
        width,
        tablet
    };
};

export default useDevices;
