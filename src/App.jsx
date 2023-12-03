import { useState } from 'react';
import Nav from './components/Nav';
import data from './utils/data.json';
import Card from './components/Card';

function App() {
    const [quotes, setQuotes] = useState(
        data.filter((n) => {
            return n.body.length < 140;
        })
    );

    return (
        <main className='flex relative flex-col min-h-screen overflow-hidden'>
            <div className='bg-gradient-to-t from-white/60 to-transparent w-screen h-[20vh] absolute bottom-0 right-0 z-10'></div>
            <Nav />
            <div className='bg-white flex flex-wrap justify-center gap-3 pt-20 pl-14 pr-12 h-screen overflow-y-scroll'>
                {quotes.map(({ id, author, body }) => {
                    return <Card author={author} body={body} key={id} />;
                })}
            </div>
        </main>
    );
}

export default App;
