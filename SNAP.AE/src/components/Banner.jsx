import React from 'react';
import { Link } from 'react-router-dom'
import './banner.css'


const Banner = () => {
    return (
        <div style={{ textAlign: 'center', paddingTop: '1px',paddingLeft: '200px',paddingRight: '200px'    }}>
            <img
                src="https://wallpaperaccess.com/full/2044892.jpg"
                alt="Banner"
                style={{ width: '75%', height: '400px' }}
            />
        </div>
    );
}

export default Banner;