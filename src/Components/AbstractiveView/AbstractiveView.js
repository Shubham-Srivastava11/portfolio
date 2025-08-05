import './AbstractiveView.css';

const AbstractiveView = () => {
    return (
        <section className='about-section' id='about'>
            <div className='about-container'>
                <div className='about-content'>
                    <div className='section-label'>About Me</div>
                    <h2 className='about-title'>
                        Crafting Digital Experiences with Passion
                    </h2>
                    <p className='about-description'>
                        I'm a dedicated full-stack developer with a passion for creating 
                        innovative solutions that bridge the gap between design and functionality. 
                        With expertise in modern web technologies, I transform ideas into 
                        engaging digital experiences.
                    </p>
                    
                    <div className='about-stats'>
                        <div className='stat-item'>
                            <span className='stat-number'>2+</span>
                            <span className='stat-label'>Years Experience</span>
                        </div>
                        <div className='stat-item'>
                            <span className='stat-number'>15+</span>
                            <span className='stat-label'>Projects Completed</span>
                        </div>
                        <div className='stat-item'>
                            <span className='stat-number'>8+</span>
                            <span className='stat-label'>Technologies</span>
                        </div>
                    </div>
                </div>
                
                <div className='about-visual'>
                    <div className='visual-card'>
                        <h3 className='visual-title'>Always Learning</h3>
                        <p className='visual-subtitle'>
                            Continuously exploring new technologies and best practices 
                            to deliver cutting-edge solutions
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AbstractiveView;