import React from 'react'

function Card({body, author}) {
  return (
    <div
    className='bg-gradient-to-b from-slate-50 to-slate-200 shadow-sm overflow-hidden flex flex-col relative justify-center items-center p-10 h-52 w-[300px] border rounded-md'
>
    <h1
        className={`font-bold text-center text-slate-700 text-sm`}
    >
        {body}
    </h1>

    <div className='absolute top-0 right-0 flex justify-center opacity-0 hover:opacity-100 items-center cursor-pointer bg-white/10 backdrop-blur-md w-full h-full duration-200 delay-300 transition-opacity'>
        <h1 className='font-bold text-lg text-slate-900'>
            {author}
        </h1>
    </div>
</div>)
}

export default Card