import Card from '../Card/Card';
import './ProjectView.css';
import projectDetails from '../utils/projectDetails';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useState } from 'react';


const ProjectView = () => {

    // const [scrollCompleted, setScrollComplteted] = useState(0);
    const scrollHandler = (event) => {

        var target = event.currentTarget.id;
        var container = document.getElementById('id-scroll');
        var scrollCompleted = 0;
        var slideVar = setInterval(function () {
            if (target === 'left') {
                container.scrollLeft -= 20;
            } else {
                container.scrollLeft += 20;
            }
            // setScrollComplteted(scrollCompleted + 5);
            scrollCompleted += 20;
            if (scrollCompleted >= 150) {
                window.clearInterval(slideVar);
            }
        }, 40);
    }
    return (
        <div className='projectView' id='projects'>
            <h1 className='projectHeader' >Let's explore some of the projects and works I've done.</h1>
            <div className='container'  >
                <div className='left-scroll' id='left' onClick={scrollHandler}><AiFillCaretLeft /></div>
                <div className='scroll' id='id-scroll'>
                    {projectDetails.map(data =>
                        <div>
                            <Card
                                project={data} />
                        </div>
                    )}
                </div>
                <div className='right-scroll' id='right' onClick={scrollHandler}><AiFillCaretRight /></div>
            </div>
        </div>
    )
}

export default ProjectView;