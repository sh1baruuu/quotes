import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Ctrl from './ctrl';

export function SearchBar({ onSearch }) {
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
