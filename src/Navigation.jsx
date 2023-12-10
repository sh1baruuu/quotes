import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Search from './components/Search';
import data from './utils/data.json';
import { useState } from 'react';
import ViewSearchCard from './components/ViewSearchCard';


function Navigation() {
    const [quotes, setQuotes] = useState(
        data.filter((n) => {
            return n.body.length < 140;
        })
    );
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App data={quotes} />}>
                    <Route path='search' element={<Search quotes={data} />} />
                    <Route path='view/:id' element={<ViewSearchCard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Navigation;
