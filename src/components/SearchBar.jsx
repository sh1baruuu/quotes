import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Ctrl from './ctrl';

export function SearchBar({ onSearch }) {
    return (
        <button
            onClick={onSearch}
            className='md:border hover:outline gap-1 outline-slate-200 dark:outline-slate-800  flex justify-center cursor-pointer items-center ml-auto lg:pl-4 md:pl-2 md:pr-6 lg:pr-4 text-gray-500 dark:text-slate-500 text border-gray-300 dark:border-slate-700 md:rounded-md lg:w-60 md:w-48 w-8 rounded-full h-8'
        >
            <FontAwesomeIcon icon={faSearch} />
            <p className='text-sm md:block hidden dark:text-[13px] font-medium dark:font-semibold pl-2 pr-1'>
                Search by author
            </p>
            <Ctrl className='h-5 lg:block hidden border px-1 py-[1px] border-slate-300 dark:border-slate-700 dark:bg-slate-900 rounded-[3px] bg-slate-50  fill-slate-500 dark:fill-slate-500' />
            <p className='h-5 lg:block hidden border px-1 text-xs font-semibold py-[1px] border-slate-300 dark:border-slate-700 dark:bg-slate-900 rounded-[3px] bg-slate-50'>
                K
            </p>
        </button>
    );
}
