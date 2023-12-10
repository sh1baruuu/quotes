import logo from '../assets/quotes.svg';

export const Logo = () => {
    return (
        <>
            <img src={logo} className='w-6 md:w-7' alt='' />
            <h1 className='font-title tracking-widest text-slate-800 dark:text-white px-2 md:text-[16px] text-sm font-bold'>
                Quotes
            </h1>
        </>
    );
};
