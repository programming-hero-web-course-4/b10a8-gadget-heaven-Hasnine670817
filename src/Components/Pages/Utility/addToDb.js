// add to cart
const getStoredCardList = () => {
    const storedListStr = localStorage.getItem('add-product');  // 'add-product' is the key
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return [];
    }
};

const addToStoredCardList = (id) => {
    const storedList = getStoredCardList();
    if (storedList.includes(id)) {
        console.log('Already exists', id);
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('add-product', storedListStr); // Store under 'add-product'
    }
};

// add to wishList
const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('add-wishList-product'); // 'add-wishList-product' is the key
    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    } else {
        return [];
    }
};

const addStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(id)) {
        console.log('Already exists', id);
    } else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('add-wishList-product', storedWishListStr); // Store under 'add-wishList-product'
    }
};

// Remove from Cart
export const removeFromStoredCardList = (productId) => {
    const storedCardList = getStoredCardList(); // Use 'add-product' key here
    const updatedList = storedCardList.filter(id => id !== productId);
    localStorage.setItem('add-product', JSON.stringify(updatedList)); // Store back under 'add-product'
};

// Remove from WishList
export const removeFromStoredWishList = (productId) => {
    const storedWishList = getStoredWishList(); // Use 'add-wishList-product' key here
    const updatedList = storedWishList.filter(id => id !== productId);
    localStorage.setItem('add-wishList-product', JSON.stringify(updatedList)); // Store back under 'add-wishList-product'
};

// Export functions
export { addToStoredCardList, getStoredCardList, addStoredWishList, getStoredWishList };
