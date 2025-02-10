import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { NavLink } from "react-router-dom";
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Contex'

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'
    return (
        <nav className="flex justify-between  items-center fixed z-10 top-0 w-full py-5 px-5 text-sm font-light">
            <ul className="flex  items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink
                        to='/'
                    >Shopi</NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        onClick={() => context.setSearchByCategory(null)}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >All</NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        onClick={() => context.setSearchByCategory('MEN')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >Men Clothes</NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        onClick={() => context.setSearchByCategory('electronics')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >Electronics</NavLink>
                </li>
                <li>
                    <NavLink
                        to='/fornitures'
                        onClick={() => context.setSearchByCategory('jewelery')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >Jewelery</NavLink>
                </li>
                <li>
                    <NavLink
                        to='/toys'
                        onClick={() => context.setSearchByCategory('WOMEN')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >Women Clothes</NavLink>
                </li>
                
            </ul>
            <ul className="flex  items-center gap-3">
                <li>
                    <NavLink
                        to='/my-orders'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >My orders</NavLink>
                </li>
                
                <li className='flex items-center'>
                    <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>
                    <div>{context.cartProducts.length}</div>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;