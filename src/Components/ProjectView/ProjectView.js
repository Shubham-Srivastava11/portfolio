import './ProjectView.css';
import projectDetails from '../utils/projectDetails';

const ProjectView = () => {
    return (
        <section className='projects-section' id='projects'>
            <div className='projects-container'>
                <div className='projects-header'>
                    <div className='section-label'>My Work</div>
                    <h2 className='projects-title'>
                        Featured Projects
                    </h2>
                    <p className='projects-subtitle'>
                        A collection of projects that showcase my skills and passion 
                        for creating meaningful digital experiences.
                    </p>
                </div>
                
                <div className='projects-grid'>
                    {projectDetails.map((project, index) => (
                        <div key={index} className='project-card'>
                            <div 
                                className={`project-status ${
                                    project.links.projectUrl ? 'demo' : 'code-only'
                                }`}
                                title={project.links.projectUrl ? 'Live Demo Available' : 'Code Only'}
                            />
                            
                            <div className='project-header'>
                                <h3 className='project-title'>{project.name}</h3>
                                <div className='project-tech'>{project.skill}</div>
                                <p className='project-description'>{project.desc}</p>
                            </div>
                            
                            <div className='project-links'>
                                <a 
                                    href={project.links.git} 
                                    className='project-link secondary'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    View Code
                                </a>
                                {project.links.projectUrl && (
                                    <a 
                                        href={project.links.projectUrl} 
                                        className='project-link primary'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectView;