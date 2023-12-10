import { useEffect, useRef, useState } from 'react';
import Nav from './components/Nav';
import Card from './components/Card';
import { Outlet, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDoubleUp,
    faCaretLeft,
    faCaretSquareLeft,
} from '@fortawesome/free-solid-svg-icons';

function App({ data }) {
    const navigate = useNavigate();
    const [quotes, setQuotes] = useState(data);
    const [isVisible, setIsVisible] = useState(false);
    const quotesContainerRef = useRef(null);

    const toggleSearch = () => {
        navigate('search');
    };

    const handleKeyDown = (event) => {
        if (event.ctrlKey && event.key === 'k') {
            event.preventDefault();
            toggleSearch();
        }

        if (event.key === 'Escape') {
            navigate('/');
        }
    };

    useEffect(() => {
        const handleKeyPress = (event) => {
            handleKeyDown(event);
        };

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    useEffect(() => {
        const quotesContainer = quotesContainerRef.current;

        const handleScroll = () => {
            if (quotesContainer.scrollTop > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        quotesContainer.addEventListener('scroll', handleScroll);

        return () => {
            quotesContainer.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        quotesContainerRef.current.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <main className='flex relative flex-col min-h-screen dark:bg-slate-900 overflow-hidden'>
            <div className='bg-gradient-to-t flex md:justify-end justify-center items-end  from-white/60 dark:from-black/60 to-transparent w-screen h-[20vh] absolute bottom-0 right-0 z-10'>
                <button
                    onClick={scrollToTop}
                    className={`dark:text-white/90 bg-slate-300 dark:bg-slate-800 grid place-items-center rounded-t-full rounded-b-full text-black/80 w-6 h-12 lg:mb-5 md:mb-10 mb-15  lg:mr-5 transition-all  ${
                        isVisible ? 'translate-y-0' : 'translate-y-[200%] '
                    }`}
                >
                    <FontAwesomeIcon className='h-4' icon={faAngleDoubleUp} />
                </button>
            </div>
            <Outlet />
            <Nav onSearch={toggleSearch} />
            <div
            ref={quotesContainerRef}
                id='quotes'
                className='bg-white pb-64 md:scroll dark:bg-slate-950 flex flex-wrap justify-center pt-32 md:gap-5 lg:gap-3 gap-3 md:pl-14 md:pr-12 px-8 h-screen overflow-y-scroll'
            >
                {quotes.map(({ id, author, body }) => {
                    return (
                        <Card author={author} body={body} id={id} key={id} />
                    );
                })}
            </div>
        </main>
    );
}

export default App;
