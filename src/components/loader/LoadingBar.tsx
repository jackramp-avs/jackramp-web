// src/components/LoadingBar.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NProgress from 'nprogress';

const LoadingBar = () => {
    const location = useLocation();

    useEffect(() => {
        NProgress.start();

        const timer = setTimeout(() => {
            NProgress.done();
        }, 200);

        return () => {
            clearTimeout(timer);
            NProgress.done();
        };
    }, [location]);

    return null;
};

export default LoadingBar;