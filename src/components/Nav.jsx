import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/quotes.png';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Ctrl from './ctrl';

function SearchBar() {
    return (
        <button
            onClick={() => alert('dmd')}
            className='border hover:outline gap-1 outline-slate-200 flex justify-center cursor-pointer items-center ml-auto px-4 text-gray-500 border-gray-300 rounded-md w-60 h-8'
        >
            <FontAwesomeIcon icon={faSearch} />
            <p className='text-sm font-medium pl-2 pr-1'>Search by author</p>
            <Ctrl className='h-5 border px-1 py-[1px] border-slate-300 rounded-[3px] bg-slate-50  fill-slate-500' />
            <p className='h-5 border px-1 text-xs font-semibold py-[1px] border-slate-300 rounded-[3px] bg-slate-50'>
                K
            </p>
        </button>
    );
}

function Nav() {
    return (
        <div className='h-fit absolute z-20 top-0 left-0 bg-white/50 backdrop-blur-md px-16 py-2 flex items-center overflow-hidden border-b w-screen '>
            <img src={logo} className='w-6' alt='' />
            <h1 className='font-title tracking-wider text-slate-800 px-2 text-[15px] font-bold'>
                Quotes
            </h1>
            <SearchBar />
        </div>
    );
}

export default Nav;
