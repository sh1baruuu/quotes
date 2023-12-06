import React from 'react'

function Card({body, author}) {


    return (
    <div
    className='bg-gradient-to-b from-slate-50 to-slate-200 dark:from-slate-900 dark:to-slate-900 shadow-sm overflow-hidden flex flex-col relative justify-center items-center p-10 h-40 md:h-52 w-[300px] border dark:border-0 rounded-md'
>
    <h1
        className={`md:font-bold dark:md:font-semibold text-center text-slate-700  dark:text-white/80 text-sm`}
    >
        {body}
    </h1>

    <div className='absolute top-0 right-0 flex justify-center opacity-0 md:hover:opacity-100 active:opacity-100 items-center cursor-pointer bg-white/10  dark:bg-black/40 backdrop-blur-md w-full h-full duration-200 delay-100 transition-opacity'>
        <h1 className='font-bold text-lg text-slate-900 dark:text-white/90'>
            {author}
        </h1>
    </div>
</div>)
}

export default Card