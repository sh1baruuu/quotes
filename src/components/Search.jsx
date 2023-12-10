import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import SearchCard from './SearchCard';
import { SearchFooter } from './SearchFooter';
import { useNavigate, useSearchParams } from 'react-router-dom';

function Search({ quotes }) {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get('author'));
    const [filteredQuotes, setFilteredQuotes] = useState(quotes);
    const [isSearching, setIsSearching] = useState(false);
    console.log(query);
    const toggleSearch = () => {
        navigate('/');
    };

    useEffect(() => {
        if (!query) {
            setSearchParams('');
            setFilteredQuotes(quotes);
            return;
        }

        setIsSearching(true);
        const timer = setTimeout(() => {
            const filtered = quotes.filter((quote) =>
                quote.author.toLowerCase().startsWith(query.toLowerCase())
            );
            setSearchParams({ author:   query });
            setIsSearching(false);
            setFilteredQuotes(filtered);
        }, 1000);

        return () => clearTimeout(timer);
    }, [query, quotes, setSearchParams]);

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const clearInput = () => {
        setQuery("")
    };

    return (
        <div
            onClick={toggleSearch}
            className='absolute grid place-items-center top-0 right-0 w-screen h-screen bg-black/30 dark:bg-slate-500/10 backdrop-blur-sm z-40'
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className='h-full w-full md:h-[60%] md:w-9/12 lg:h-[75%] lg:w-[50%] lg:mb-16 relative  overflow-hidden dark:bg-slate-950 bg-white rounded-md'
            >
                <div className='w-full p-4 pb-3 h-fit dark:text-white/90 text-slate-500 border-b border-slate-200 dark:border-slate-800'>
                    <div className='relative'>
                        <FontAwesomeIcon
                            className='absolute top-2/4 dark:text-slate-600 text-slate-500 translate-y-[-50%] left-4'
                            icon={faSearch}
                        />
                        <input
                            text='text'
                            name='author'
                            placeholder='Search...'
                            maxLength={40}
                            autoComplete='off'
                            spellCheck={true}
                            value={query}
                            onChange={handleChange}
                            className='bg-transparent text-sm placeholder:text-slate-500 placeholder:font-medium border-slate-300 shadow-sm rounded-md border focus:outline-none focus:ring px-12 dark:caret-blue-500 dark:border-slate-800 w-full h-12'
                        />
                        <FontAwesomeIcon
                            onClick={clearInput}
                            className='absolute cursor-pointer  top-2/4 dark:text-slate-600 text-slate-500 translate-y-[-50%] right-5'
                            icon={faXmark}
                        />
                    </div>
                </div>
                {isSearching && (
                    <span className='block w-full h-[2px] relative bg-slate-100 dark:bg-slate-900 before:content-[""] before:absolute before:bg-blue-500 before:top-0 before:left-0 before:w-[0%] before:h-full before:rounded-3x before:animate-loader'></span>
                )}
                <div className='flex px-4 pt-8 pb-40 flex-col md:scroll gap-3 h-[80%] min-h-[300px] w-full overflow-y-scroll'>
                    {filteredQuotes.map(({ id, author, tags, body }) => {
                        return (
                            <SearchCard
                                id={id}
                                author={author}
                                body={body}
                                tags={tags}
                                key={id}
                            />
                        );
                    })}
                    {filteredQuotes.length === 0 && (
                        <p className='w-full text-center text-slate-500 dark:text-slate-700 font-medium text-xs'>
                            No results found.
                        </p>
                    )}
                </div>
                <SearchFooter toggleSearch={toggleSearch} />
            </div>
        </div>
    );
}

export default Search;
