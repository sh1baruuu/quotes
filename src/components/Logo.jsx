import logo from '../assets/quotes.png';

export const Logo = () => {
    return (
        <>
            <img src={logo} className='w-7' alt='' />
            <h1 className='font-title tracking-widest text-slate-800 dark:text-white px-2 text-[16px] font-bold'>
                Quotes
            </h1>
        </>
    );
};
