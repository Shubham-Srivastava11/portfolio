import React from 'react';
import './FirstLook.css';
import images from '../../images';

const FirstLook = () => {
    return (
        <div
            className='main'>
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
                    <p>I'm
                        <label> Shubham Srivastava </label>
                        building up my skills to create more exciting stuff.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default FirstLook;