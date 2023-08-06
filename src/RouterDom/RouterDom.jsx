import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HeroPage from '../Components/HeroPage/HeroPage';
import HeroList from '../Components/HeroList/HeroList';
import ErrorPage from '../Components/ErrorPage/ErrorPage';

const RouterDom = () => {
    return (
        <Routes>
            <Route path='/hero-list/hero/:id' element={<HeroPage />} />
            <Route path='' element={<Navigate to={'/hero-list'} />} />
            <Route path='hero-list' element={<HeroList />} />
            <Route path='/error-page' element={<ErrorPage />} />
        </Routes>
    );
}

export default RouterDom;
