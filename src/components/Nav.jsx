import { ChangeThemeButton } from './ChangeThemeButton';
import { Logo } from './Logo';
import { SearchBar } from './SearchBar';

function Nav({ onSearch }) {
    return (
        <div className='h-fit absolute z-20 top-0 left-0 bg-white/50 dark:bg-slate-950/80 backdrop-blur-md md:px-16 px-7 md:pb-3 py-2 md:pt-5 flex items-center overflow-hidden border-b dark:border-slate-900 w-screen '>
            <Logo/>
            <SearchBar onSearch={onSearch} />
            <ChangeThemeButton />
        </div>
    );
}

export default Nav;
