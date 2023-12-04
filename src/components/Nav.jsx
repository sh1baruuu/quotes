import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/quotes.png';
import { faMoon, faSearch, faSun } from '@fortawesome/free-solid-svg-icons';
import Ctrl from './ctrl';
import { useEffect, useState } from 'react';

function SearchBar({ onSearch }) {
    return (
        <button
            onClick={onSearch}
            className='border hover:outline gap-1 outline-slate-200 dark:outline-slate-800  flex justify-center cursor-pointer items-center ml-auto px-4 text-gray-500 dark:text-slate-500 text border-gray-300 dark:border-slate-700 rounded-md w-60 h-8'
        >
            <FontAwesomeIcon icon={faSearch} />
            <p className='text-sm dark:text-[13px] font-medium dark:font-semibold pl-2 pr-1'>
                Search by author
            </p>
            <Ctrl className='h-5 border px-1 py-[1px] border-slate-300 dark:border-slate-700 dark:bg-slate-900 rounded-[3px] bg-slate-50  fill-slate-500 dark:fill-slate-500' />
            <p className='h-5 border px-1 text-xs font-semibold py-[1px] border-slate-300 dark:border-slate-700 dark:bg-slate-900 rounded-[3px] bg-slate-50'>
                K
            </p>
        </button>
    );
}

function Nav({ onSearch }) {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const mode = localStorage.getItem('darkMode');
        if (mode==="true") {
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
        <div className='h-fit absolute z-20 top-0 left-0 bg-white/50 dark:bg-slate-950/80 backdrop-blur-md px-16 pb-3 pt-5 flex items-center overflow-hidden border-b dark:border-slate-900 w-screen '>
            <img src={logo} className='w-7' alt='' />
            <h1 className='font-title tracking-widest text-slate-800 dark:text-white px-2 text-[16px] font-bold'>
                Quotes
            </h1>
            <SearchBar onSearch={onSearch} />
            <button
                onClick={toggleDarkMode}
                className='h-7 ml-4 relative w-14 border-[1px] dark:border-[2px] bg-slate-200 border-slate-300 dark:border-slate-800 flex justify-between shadow-light dark:shadow-dark px-[7px] items-center dark:bg-slate-800  rounded-r-full rounded-l-full text-slate-600'
            >
                <div
                    className={`rounded-full absolute top-2/4  left-1 translate-y-[-50%] bg-slate-600 dark:bg-slate-700 ${
                        darkMode ? 'translate-x-[95%]' : 'translate-x-[-10%]'
                    } grid transition-all duration-300 place-items-center w-6 h-6`}
                ></div>
                <FontAwesomeIcon
                    className='h-4 text-yellow-200 w-4'
                    icon={faMoon}
                />
                <FontAwesomeIcon
                    className='h-4 w-4 text-blue-500 dark:opacity-0'
                    icon={faSun}
                />
            </button>
        </div>
    );
}

export default Nav;
