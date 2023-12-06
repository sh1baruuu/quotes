import { faArrowRight, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SearchCard({ author, body, tags }) {
    return (
        <div className='flex w-full overflow-hidden dark:hover:bg-slate-800/30 hover:bg-slate-100  rounded-md min-h-[5rem] h-20'>
            <div className='h-full w-12 grid place-items-center'>
                <FontAwesomeIcon
                    className='h-4 md:h-5 text-slate-400 dark:text-slate-700'
                    icon={faQuoteRight}
                />
            </div>
            <div className='inline-flex py-1 pr-2 justify-center  flex-col w-full h-full'>
                <h1 className='dark:text-slate-400 text-sm md:text-base text-slate-800 font-medium'>{author}</h1>
                <span className='dark:text-slate-600 text-slate-500  flex font-medium lg:text-[.8rem] text-[.7rem]'>
                    {body.length <= 70 ? body : body.slice(0, 65)}
                    {body.length < 70 ? (
                        ''
                    ) : (
                        <>
                        {"..."}
                        <p className='pt-[2px] cursor-pointer hover:text-blue-500 lg:text-xs text-[.65rem]'>
                            See more
                        </p></>
                    )}
                </span>
                <div className='text-[.60rem] flex gap-1 mt-1 text-slate-500'>
                    {tags.map((x, i) => {
                        return (
                            <span key={i} className='rounded-md pb-[1px] border dark:bg-slate-800/60 bg-slate-200/60 dark:border-slate-700 border-slate-400 w-fit px-2'>
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
            <button className='h-full w-12  grid place-items-center'>
                <FontAwesomeIcon
                    className='h-4 rotate-[-45deg] text-slate-500 dark:text-slate-700'
                    icon={faArrowRight}
                />
            </button>
        </div>
    );
}

export default SearchCard;
