import { faQuoteRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import quotes from '../utils/data.json';

function ViewSearchCard() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [quote, setQuote] = useState({});
    const { author, body, tags } = quote[0] ?? {
        author: ' ',
        body: '',
        tags: [],
    };

    useEffect(() => {
        setQuote(
            quotes.filter((n) => {
                return n.id === Number(id);
            })
        );
    }, [id]);

    return (
        <div
            onClick={() => navigate(-1)}
            className='absolute grid place-items-center top-0 right-0 w-screen h-screen bg-black/30 dark:bg-slate-500/10 backdrop-blur-sm z-40'
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className='flex md:w-6/12 w-[90%] px-4 overflow-hidden relative dark:bg-slate-950 bg-white rounded-lg h-64'
            >
                <div
                    onClick={() => navigate(-1)}
                    className='grid place-items-center absolute top-3 right-3 w-5 h-5 cursor-pointer text-slate-500 dark:text-slate-700 rounded-full'
                >
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <div className='h-full w-24 grid place-items-center'>
                    <FontAwesomeIcon
                        className='h-4 md:h-5 text-slate-400 dark:text-slate-700'
                        icon={faQuoteRight}
                    />
                </div>
                <div className='inline-flex py-1 pr-2 justify-center flex-col w-full h-full'>
                    <h1 className='dark:text-slate-400 gap-2 text-lg md:text-base text-slate-800 font-medium'>
                        {author}
                    </h1>
                    <span className='dark:text-slate-600 text-slate-500  flex font-medium lg:text-[1rem] text-[.7rem]'>
                        {body}
                    </span>
                    <div className='text-[.60rem] flex gap-1 mt-1 text-slate-500'>
                        {tags.map((x, i) => {
                            return (
                                <span
                                    key={i}
                                    className='rounded-md pb-[1px] border dark:bg-slate-800/60 bg-slate-200/60 dark:border-slate-700 border-slate-400 w-fit px-2'
                                >
                                    {x}
                                </span>
                            );
                        })}
                        {tags.length === 0 && (
                            <span className='rounded-md pb-[1px] dark:bg-slate-800/60 bg-slate-200/60 border dark:border-slate-700 border-slate-400 w-fit px-2'>
                                no tags
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewSearchCard;
