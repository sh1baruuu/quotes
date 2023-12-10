import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

export function ChangeThemeButton() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const mode = localStorage.getItem('darkMode');
        if (mode === 'true') {
            setDarkMode(true);
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prev) => {
            const newMode = !prev;
            localStorage.setItem('darkMode', newMode);
            return newMode;
        });
    };

    return (
        <button
            onClick={toggleDarkMode}
            className='h-7 ml-4 relative w-7 md:w-14 md:border-[1px] dark:md:border-[2px] dark:border-0 md:bg-slate-200 border-slate-300 dark:border-slate-800 flex justify-between md:shadow-light dark:md:shadow-dark dark:shadow-none px-[7px] items-center dark:bg-transparent dark:md:bg-slate-800  rounded-r-full rounded-l-full text-slate-600'
        >
            <div
                className={`rounded-full absolute md:block hidden top-2/4  left-1 translate-y-[-50%] bg-gradient-to-br from-slate-400 to-slate-500 dark:from-slate-700 dark:to-slate-700 ${darkMode ? 'translate-x-[95%]' : 'translate-x-[-10%]'} grid transition-all duration-300 place-items-center w-6 h-6`}
            ></div>
            <FontAwesomeIcon
                className='h-4 hidden dark:block md:block text-yellow-200 w-4'
                icon={faMoon} />
            <FontAwesomeIcon
                className='h-4 w-4 text-blue-500 dark:opacity-0'
                icon={faSun} />
        </button>
    );
}
