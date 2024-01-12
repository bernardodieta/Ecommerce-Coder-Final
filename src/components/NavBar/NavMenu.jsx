import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './NavBar.css';
import { colors } from '@material-ui/core';

export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <li className='menu-desplegable2'>Categories</li>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Link to='/categoryman' className='menu-desplegable'><MenuItem onClick={handleClose}>Men</MenuItem></Link>
                <Link to='/categorywoman' className='menu-desplegable'><MenuItem onClick={handleClose}>Women</MenuItem></Link>
                <Link to='/categoryelectronic' className='menu-desplegable'><MenuItem onClick={handleClose}>Electronics</MenuItem></Link>



            </Menu>
        </div>
    );
}