import './SkillSet.css';
import skillDetails from '../utils/SkillDetails';

const SkillSet = () => {
    const getSkillLevel = (skill) => {
        const levels = {
            'REACT': 85,
            'JAVASCRIPT': 90,
            'PYTHON': 88,
            'HTML5': 95,
            'CSS': 85,
            'MYSQL': 80,
            'JAVA': 75,
            'JENKINS': 70
        };
        return levels[skill] || 70;
    };

    return (
        <section className='skills-section' id='skills'>
            <div className='skills-container'>
                <div className='skills-header'>
                    <div className='section-label'>My Expertise</div>
                    <h2 className='skills-title'>
                        Technologies & Tools
                    </h2>
                    <p className='skills-subtitle'>
                        A comprehensive overview of the technologies I work with 
                        and the tools that help me bring ideas to life.
                    </p>
                </div>
                
                <div className='skills-grid'>
                    {skillDetails.map((skill, index) => (
                        <div key={index} className='skill-card'>
                            <div
                                className='skill-icon'
                                style={{ backgroundImage: `url(${skill.img})` }}
                            />
                            <h3 className='skill-name'>{skill.skill}</h3>
                            <p className='skill-description'>{skill.desc}</p>
                            
                            <div className='skill-level'>
                                <span className='skill-level-label'>Proficiency</span>
                                <span className='skill-level-value'>{getSkillLevel(skill.skill)}%</span>
                            </div>
                            <div className='skill-progress'>
                                <div 
                                    className='skill-progress-bar'
                                    style={{ width: `${getSkillLevel(skill.skill)}%` }}
                                />
                            </div>
                            
                            <div className='skill-usage'>
                                Last used: {skill.usage}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillSet;