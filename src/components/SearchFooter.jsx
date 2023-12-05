export const SearchFooter = () => {
    return (
        <div className='flex items-center bg-white dark:bg-slate-950 absolute bottom-0 right-0 text-[.7rem] font-medium text-slate-500 dark:text-slate-600 px-4 w-full h-14 border-t dark:border-slate-800'>
            <p>
                <span className='border mr-1 text-xs border-slate-400 dark:border-slate-700 dark:shadow-btn-d shadow-btn-l px-1 pb-[1px] rounded-[4px]'>
                    esc
                </span>
                to close
            </p>
            <p className='ml-auto'>Created by</p>
            <h1 className='ml-1 text-[16px]  font-title font-bold'>
                {/* <span className='h-3 text-xs px-[6px] py-[1px] dark:text-slate-900 text-white mx-1 rounded-[4px] bg-slate-500 dark:bg-slate-700'>
                    S
                </span> */}
                <a href="https://github.com/sh1baruuu">shibaru</a>
            </h1>
        </div>
    );
};
