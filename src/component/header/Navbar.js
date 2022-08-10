import React from 'react';
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
const Navbar = () => {

    return (
        <header>
            <nav>
                <div className='left'>
                    <div className='navlogo'>
                        <img src='./amazon_logo.png' alt='not found' />
                    </div>
                    <div className='navsearch'>
                        <input type="text"></input>
                        <div className='search_icon'>
                        <SearchIcon id="search" />
                        </div>
                    </div>

                </div>
                <div className='right'>
                    <div className='navbtn'><a href=''>Signin</a></div>
                    <div className='cart'>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartIcon id="carticon"/>
                        </Badge>
                        <p>cart</p>
                    </div>
                    <Avatar className='avtar' />
                </div>
            </nav>
        </header>
    );

}

export default Navbar;