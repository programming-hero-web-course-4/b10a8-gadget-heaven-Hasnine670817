import Navbar from '../Pages/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import { useState } from 'react';

const Root = () => {

    const [cartItemCount, setCartItemCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);

    return (
        <div>
            <Navbar cartItemCount={cartItemCount} wishlistCount={wishlistCount}></Navbar>
            <Outlet context={{ setCartItemCount, setWishlistCount }}></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;