
import React from 'react';
import TodoApp from './components/TodoApp/TodoApp';
import About from './components/About/About';
import Header from './components/Header/Header';

import { Route,Routes } from 'react-router-dom';

const App=()=>{
    return (
        <>
    <Header />
        <Routes>
            <Route path="/" exact element={<TodoApp />} />
            <Route path="/about" element={<About />} />
            
            </Routes>
            </>

    );
};
export default App