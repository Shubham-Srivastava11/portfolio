import React from 'react';
import './FirstLook.css';
import images from '../../images';

const FirstLook = () => {
    const scrollToNext = () => {
        const nextSection = document.getElementById('about');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='main' id='home'>
            <div className='hero-container'>
                <div className='main-left'>
                    <div className='image-container'>
                        <div
                            className='image'
                            style={{ backgroundImage: `url(${images.profile})` }}
                        />
                    </div>
                </div>
                
                <div className='main-right'>
                    <div className='greeting'>Hello, I'm</div>
                    <h1 className='name'>
                        <span className='name-highlight'>Shubham</span> Srivastava
                    </h1>
                    <p className='tagline'>
                        Full-stack developer passionate about creating beautiful, 
                        functional digital experiences that make a difference.
                    </p>
                    
                    <div className='cta-buttons'>
                        <a href='#projects' className='btn-primary'>
                            View My Work
                        </a>
                        <a href='#connect' className='btn-secondary'>
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>
            
            <div className='scroll-indicator' onClick={scrollToNext}>
                <span>Scroll to explore</span>
                <div className='scroll-arrow'></div>
            </div>
        </div>
    );
};

export default FirstLook;