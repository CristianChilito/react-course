import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    // Product Detail · Open/close 
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)

    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Checkout Side Menu · Open/close 
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)

    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    //Shopping Cart . Increment cuantity
    const [count, setcount] = useState(0)
    // Product Detail · Show product
    const [productToShow, setProductToShow] = useState({})
    //Shopping Cart . Add products to cart
    const [cartProducts, setcartProducts] = useState([])

    // Shopping Cart . Order
    const [order, setOrder] = useState([])

    // get products 
    const [items, setItems] = useState([])

    // filter   items  
    const [filtereditems, setFilteredItems] = useState([])

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null)
    // Get products by category
    const [searchByCategory, setSearchByCategory] = useState(null)


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setItems(data))

    }, [])
    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {

        return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (!items) return [];

        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle)
        }

        if (searchType === 'BY_CATEGORY') {
            console.log(searchByCategory)
            console.log(filteredItemsByCategory(items, searchByCategory))
            return filteredItemsByCategory(items, searchByCategory)
        }

        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }

        if (!searchType) {

            return items
        }
    }

    useEffect(() => {
        if (items) {
            if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
            if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
            if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
            if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
        }else {  setFilteredItems([]); }


    }, [items, searchByTitle, searchByCategory])



    return (

        <ShoppingCartContext.Provider value={{
            count,
            setcount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setcartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems, searchByTitle, setSearchByTitle,
            filtereditems,
            searchByCategory, setSearchByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
