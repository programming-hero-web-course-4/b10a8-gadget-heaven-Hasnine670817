import React, { useEffect, useState } from 'react';
import { useLoaderData, useOutletContext } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredCardList, getStoredWishList, removeFromStoredCardList, removeFromStoredWishList, addToStoredCardList } from '../Utility/addToDb';
import SortImg from '../../../assets/images/sort.png';
import DeleteBtn from '../../../assets/images/delete.png';

const Dashboard = () => {

    const { setCartItemCount, setWishlistCount } = useOutletContext();
    
    const [productList, setProductList] = useState([]);
    const [wishlist, setWishList] = useState([]);
    const [isSortedDescending, setIsSortedDescending] = useState(false);

    const allProducts = useLoaderData();

    // Fetch products for cart
    useEffect(() => {
        const storedCardList = getStoredCardList();
        const storedCardListInt = storedCardList.map(id => parseInt(id));

        const addProductList = allProducts.filter(product => storedCardListInt.includes(product.product_id));
        setProductList(addProductList);
        setCartItemCount(addProductList.length);
    }, [allProducts, setCartItemCount]);

    // Fetch products for wishlist
    useEffect(() => {
        const storedWishList = getStoredWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id));

        const addWishList = allProducts.filter(product => storedWishListInt.includes(product.product_id));
        setWishList(addWishList);
        setWishlistCount(addWishList.length);
    }, [allProducts, setWishlistCount]);

    // Calculate total cost of items in cart
    const calculateTotalCost = (items) => {
        return items.reduce((total, item) => {
            return total + (item.price || 0);
        }, 0).toFixed(2);
    };

    // Remove product from Cart
    const handleRemoveFromCart = (productId) => {
        removeFromStoredCardList(productId);

        const updatedProductList = productList.filter(product => product.product_id !== productId);
        setProductList(updatedProductList);

        setCartItemCount(updatedProductList.length);
    };

    // Remove product from Wishlist
    const handleRemoveFromWishlist = (productId) => {
        removeFromStoredWishList(productId);

        const updatedWishlist = wishlist.filter(product => product.product_id !== productId);
        setWishList(updatedWishlist);

        setWishlistCount(updatedWishlist.length);
    };

    // Add product to Cart from Wishlist
    const handleAddToCartFromWishlist = (productId) => {
        addToStoredCardList(productId);

        const updatedWishlist = wishlist.filter(product => product.product_id !== productId);
        setWishList(updatedWishlist);
        setWishlistCount(updatedWishlist.length);

        // Add the product to the cart
        const updatedProductList = [...productList, allProducts.find(product => product.product_id === productId)];
        setProductList(updatedProductList);
        setCartItemCount(updatedProductList.length);
    };

    // Handle sorting by price (descending order)
    const handleSortByPrice = () => {
        const sortedList = [...productList];
        sortedList.sort((a, b) => {
            return isSortedDescending
                ? a.price - b.price  
                : b.price - a.price;
        });

        setProductList(sortedList);
        setIsSortedDescending(!isSortedDescending);
    };

    return (
        <div className='dashboard-area'>
            <div className='products-details-banner bg-[#9538E2] pt-8 pb-[115px] text-center'>
                <h3 className='text-xl sm:text-2xl md:text-[32px] font-bold text-white mb-4'>Dashboard</h3>
                <p className='text-[14px] md:text-base font-normal text-white px-5 lg:px-0'>
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to
                    <br className="hidden lg:block" /> the coolest accessories, we have it all!
                </p>
            </div>

            <Tabs>
                <TabList className={'text-center -mt-20 mb-10'}>
                    <Tab>Cart</Tab>
                    <Tab>WishList</Tab>
                </TabList>

                {/* Cart Tab Panel */}
                <TabPanel>
                    <div className='container pt-5 px-4 sm:px-10 md:px-14 lg:px-24 xl:px-0 xl:max-w-[1100px] 2xl:max-w-[1280px] mx-auto'>
                        <div className='flex flex-wrap gap-4 justify-between items-center'>
                            <h3 className='text-xl lg:text-2xl font-bold text-[#0B0B0B]'>Cart {productList.length}</h3>
                            <div className='flex flex-wrap gap-3 md:gap-6 items-center'>
                                <h3 className='text-xl lg:text-2xl font-bold text-[#0B0B0B]'>Total cost: ${calculateTotalCost(productList)}</h3>
                                <button onClick={handleSortByPrice} className='border border-[#B752E0] text-[#9538E2] text-base md:text-[18px] font-semibold py-3 px-[22px] rounded-[32px] flex gap-[10px]'>
                                    Sort By Price <img src={SortImg} alt="image" />
                                </button>
                                <button className='border border-[#B752E0] text-white text-base lg:text-[18px] font-semibold py-3 px-[22px] rounded-[32px] flex gap-[10px] bg-[#B752E0]'>
                                    Purchase
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='container pt-5 px-4 sm:px-10 md:px-14 lg:px-24 xl:px-0 xl:max-w-[1100px] 2xl:max-w-[1280px] mx-auto'>
                        <div>
                            {productList.map((product, idx) => (
                                <div key={idx}>
                                    <div className='bg-white p-5 md:p-8 rounded-3xl md:rounded-[32px] grid sm:grid-cols-[2.5fr_9.5fr] gap-8 mb-6 items-center relative'>
                                        <button onClick={() => handleRemoveFromCart(product.product_id)} className='absolute top-8 right-[8%] bg-white rounded-full'>
                                            <img src={DeleteBtn} alt="image" />
                                        </button>
                                        <figure>
                                            <img className='w-full h-[200px] md:h-[124px] object-contain bg-[#D9D9D9] rounded-xl p-3' src={product.product_image} alt={product.product_title} />
                                        </figure>
                                        <div>
                                            <h3 className='text-xl lg:text-2xl font-semibold text-[#09080F]'>{product.product_title}</h3>
                                            <p className='text-base lg:text-[18px] font-normal text-[#09080F99] mt-3 mb-4'>{product.description}</p>
                                            <p className='text-[18px] lg:text-xl text-[#09080FCC] font-semibold'>Price: $ {product.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </TabPanel>

                {/* Wishlist Tab Panel */}
                <TabPanel>
                    <div className='container pt-5 px-4 sm:px-10 md:px-14 lg:px-24 xl:px-0 xl:max-w-[1100px] 2xl:max-w-[1280px] mx-auto'>
                        <div className='flex flex-wrap gap-4 justify-between items-center'>
                            <h3 className='text-xl lg:text-2xl font-bold text-[#0B0B0B]'>WishList {wishlist.length}</h3>
                        </div>
                    </div>

                    <div className='container pt-5 px-4 sm:px-10 md:px-14 lg:px-24 xl:px-0 xl:max-w-[1100px] 2xl:max-w-[1280px] mx-auto'>
                        <div>
                            {wishlist.map((product, idx) => (
                                <div key={idx}>
                                    <div className='bg-white p-5 md:p-8 rounded-3xl md:rounded-[32px] grid sm:grid-cols-[2.5fr_9.5fr] gap-8 mb-6 items-center relative'>
                                        <button onClick={() => handleRemoveFromWishlist(product.product_id)} className='absolute top-8 right-[8%] bg-white rounded-full'>
                                            <img src={DeleteBtn} alt="image" />
                                        </button>
                                        <figure>
                                            <img className='w-full h-[200px] md:h-full object-contain bg-[#D9D9D9] rounded-xl p-3' src={product.product_image} alt={product.product_title} />
                                        </figure>
                                        <div>
                                            <h3 className='text-xl lg:text-2xl font-semibold text-[#09080F]'>{product.product_title}</h3>
                                            <p className='text-base lg:text-[18px] font-normal text-[#09080F99] mt-3 mb-4'><b className='text-[#09080F]'>Description:</b> {product.description}</p>
                                            <p className='text-[18px] lg:text-xl text-[#09080FCC] font-semibold'>Price: $ {product.price}</p>
                                            <button onClick={() => handleAddToCartFromWishlist(product.product_id)} className='border border-[#B752E0] text-white text-base lg:text-[18px] font-semibold py-3 px-[22px] rounded-[32px] flex gap-[10px] bg-[#B752E0] mt-4'>
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Dashboard;
