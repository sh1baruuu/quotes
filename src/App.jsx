import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import data from './utils/data.json';
import Card from './components/Card';
import Search from './components/Search';

function App() {
    const [quotes, setQuotes] = useState(
        data.filter((n) => {
            return n.body.length < 140;
        })
    );

    const [showSearch, setShowSearch] = useState(false);

    const toggleSearch = () => {
        setShowSearch(true);
    };

    const handleKeyDown = (event) => {
            
        if (event.ctrlKey && event.key === 'k') {
            event.preventDefault()
            setShowSearch(true)
        }

        if(event.key === "Escape"){
            setShowSearch(false)
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

    return (
        <main className='flex relative flex-col min-h-screen dark:bg-slate-900 overflow-hidden'>
            <div className='bg-gradient-to-t from-white/60 dark:from-black/60 to-transparent w-screen h-[20vh] absolute bottom-0 right-0 z-10'></div>
            {showSearch && <Search />}
            <Nav onSearch={toggleSearch} />
            <div className='bg-white dark:bg-slate-950 flex flex-wrap justify-center gap-3 pt-20 pl-14 pr-12 h-screen overflow-y-scroll'>
                {quotes.map(({ id, author, body }) => {
                    return <Card author={author} body={body} key={id} />;
                })}
            </div>
        </main>
    );
}

export default App;
