import React from 'react';
import './FirstLook.css';
import images from '../../images';

const FirstLook = () => {
    return (
        <div
            className='main'
            id='home' >

            <div
                className='main-left'>
                <div
                    className='image'
                    style={{ backgroundImage: `url(${images.profile})` }}
                >
                </div>

            </div>
            <div
                className='main-right'>
                <div className='header'> {'<'}नमस्ते!{'>'} </div>
                <div className='content'>
                    <p className='line1'>I'm<label> Shubham Srivastava </label>  building up my</p>
                    <p className='line2'>  skills to create more exciting stuff.</p>
                </div>
            </div>

        </div>
    )
}

export default FirstLook;