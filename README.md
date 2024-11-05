
# Gadget Heaven (Assignment-8)

In assignment 8 we tried to create an e-commerce website using react router. I tried to route from one page to another page without loading the page by using react router, also worked with the utility of various buttons. For example: adding court by clicking on 'add to cart' button, adding wishlist items by clicking on wishlist button, also creating remove functionality.


## React Fundamental Concept in My Project:

- **Components**:
    - Various components have been created, such as Dashboard, ProductDetails, and Navbar. Each component is independent and reusable.

- **State Management**:
    - The useState hook is used to manage the internal state of components. For example, states like productList, wishlist, cartItemCount, and wishlistCount are utilized to track data.

- **Routing**:
    - The react-router-dom library manages navigation between pages. Hooks like useLoaderData, useNavigate, and useOutletContext are used for routing and data loading.

- **Conditional Rendering**:
    - Conditional rendering is implemented to display specific content based on user actions, such as showing either the Cart or Wishlist tab and rendering the appropriate product list.

- **Local Storage**:
    - Local storage is utilized to save and retrieve the user's cart and wishlist data, ensuring that the items persist even after a page reload.

- **Props**

    - Props are used to transfer data between components. For example, functions like setCartItemCount and setWishlistCount are passed as props to manage state in parent components.

- **Toast Notifications**

    - The react-toastify library is used to show success and error messages for user interactions, such as displaying a notification when an item is removed from the cart etc....


## In my project, I have utilized the following methods for handling and managing data:
- Local Storage
- Context API (Planned)

## 5 features of my website/project:
- **Product Listings:**
    - The website displays a list of products, allowing users to browse through various items with images, titles, descriptions, and prices.

- **Cart Functionality:**
    - Users can add products to their shopping cart. The cart maintains a persistent state using local storage, so items remain in the cart even after page refreshes.

- **Wishlist Feature:**
    - Users can add products to a wishlist, which is also stored in local storage. This allows users to save items for later consideration.

- **Dynamic Cart and Wishlist Counts:**
    - The navbar displays real-time counts of items in the cart and wishlist, providing users with immediate feedback on their selections.

- **Sort Products by Price:**
    - Users can sort the products in their cart by price, allowing them to view items in ascending or descending order based on their price.


## Github Private Repo link
- Private Link (https://github.com/programming-hero-web-course-4/b10a8-gadget-heaven-Hasnine670817.git)

## Project live link
- Live link (https://gadget-heaven-144.surge.sh/)
