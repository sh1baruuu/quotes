import { ChangeThemeButton } from './ChangeThemeButton';
import { Logo } from './Logo';
import { SearchBar } from './SearchBar';

function Nav({ onSearch }) {
    return (
        <div className='h-fit absolute z-20 top-0 left-0 bg-white/50 dark:bg-slate-950/80 backdrop-blur-md px-16 pb-3 pt-5 flex items-center overflow-hidden border-b dark:border-slate-900 w-screen '>
            <Logo/>
            <SearchBar onSearch={onSearch} />
            <ChangeThemeButton />
        </div>
    );
}

export default Nav;
