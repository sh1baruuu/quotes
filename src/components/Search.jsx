import {
    faArrowRight,
    faQuoteLeft,
    faQuoteRight,
    faSearch,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const Footer = () => {
    return (
        <div className='flex items-center bg-white dark:bg-slate-900 absolute bottom-0 right-0 text-[.7rem] font-medium text-slate-500 dark:text-slate-600 px-4 w-full h-14 border-t dark:border-slate-800'>
            <p>
                <span className='border mr-1 text-xs dark:border-slate-700 dark:shadow-btn-d shadow-btn-l px-1 pb-[1px] rounded-[4px]'>
                    esc
                </span>
                to close
            </p>
            <p className='ml-auto'>Search by</p>
            <h1 className='ml-1 text-[16px]  font-title font-bold'>
                <span className='h-3 text-xs px-[6px] py-[1px] dark:text-slate-900 text-white mx-1 rounded-[4px] bg-slate-500 dark:bg-slate-700'>
                    S
                </span>
                shiba
            </h1>
        </div>
    );
};

function Search() {
    const [author, setAuthor] = useState('');

    const handleChange = (event) => {
        setAuthor(event.target.value);
    };

    return (
        <div className='absolute grid place-items-center top-0 right-0 w-screen h-screen bg-black/30 backdrop-blur-sm z-40'>
            <div className='h-[75%] mb-16 relative w-[50%] overflow-hidden dark:bg-slate-900 bg-white rounded-md'>
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
                            value={author}
                            onChange={handleChange}
                            className='bg-transparent text-sm placeholder:text-slate-500 placeholder:font-medium border-slate-300 shadow-sm rounded-md border focus:outline-none focus:ring px-12 dark:caret-blue-500 dark:border-slate-800 w-full h-12'
                        />
                        <FontAwesomeIcon
                            className='absolute cursor-pointer  top-2/4 dark:text-slate-600 text-slate-500 translate-y-[-50%] right-5'
                            icon={faXmark}
                        />
                    </div>
                </div>
                <div className='flex px-4 pt-8 flex-col gap-1 h-[80%] min-h-[300px] w-full'>
                    {/* FIXME light theme */}
                    <div className='flex w-full overflow-hidden hover:bg-slate-800/30 rounded-md h-20'>
                        <div className='h-full w-12  grid place-items-center'>
                            <FontAwesomeIcon
                                className='h-5 text-slate-700'
                                icon={faQuoteRight}
                            />

                        </div>
                        <div className='flex py-1 pr-2 justify-center  flex-col w-full h-full'>
                            <h1 className='text-slate-500 font-semibold'>Anonymous</h1>
                            <p className='text-slate-600 font-medium text-[.8rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                            <div className='text-[.60rem] mt-1 text-slate-500'>
                                <span className='rounded-md pb-[1px] border border-slate-700 w-fit px-2'>no tag</span>
                            </div>
                        </div>
                        <button className='h-full w-12  grid place-items-center'>
                            <FontAwesomeIcon
                                className='h-4 rotate-[-45deg] text-slate-700'
                                icon={faArrowRight}
                            />

                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Search;
