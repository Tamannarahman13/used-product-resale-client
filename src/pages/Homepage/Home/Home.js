import React from 'react';
import { Link } from 'react-router-dom';
import UseTitle from '../../../hooks/UseTitle';


import Wishlist from '../../Wishlist/Wistlist/Wishlist';
import Brands from '../Brands/Brands';
import Hero from '../Hero/Hero';
import Products from '../Products/Products';
import Subscription from '../Subscription/Subscription';

const Home = () => {
    UseTitle('Home')
    return (
        <main >
            <Hero />
            <Products></Products>
            <Brands />
            <Wishlist />

        </main>
    );
};

export default Home;