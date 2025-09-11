import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import 'flowbite'
import './index.css'
import App from './App.jsx'


import { useEffect } from 'react';

function ThemeToggleListener() {
    useEffect(() => {
        const themeToggleBtn = document.getElementById('theme-toggle');
        if (!themeToggleBtn) return;

        const handleThemeToggle = () => {
            document.documentElement.classList.toggle('dark');
            if (document.documentElement.classList.contains('dark')) {
                localStorage.setItem('color-theme', 'dark');
            } else {
                localStorage.setItem('color-theme', 'light');
            }
        };

        themeToggleBtn.addEventListener('click', handleThemeToggle);

        return () => {
            themeToggleBtn.removeEventListener('click', handleThemeToggle);
        };
    }, []);

    return null;
}

createRoot(document.getElementById('root')).render(
    <>
        <ThemeToggleListener />
        <App />
    </>
)

