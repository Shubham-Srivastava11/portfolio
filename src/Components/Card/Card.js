import { useState } from 'react';
import './Card.css';
import images from '../../images';

const Card = (props) => {

    const [isClicked, setIsClicked] = useState(false);

    const handleCardClick = () => {
        setIsClicked(!isClicked);
    }
    return (
        <div className='main-project'>
            <div
                // style={{ backgroundImage: `url(${images.admin})` }}
                className={`card_column ${isClicked ? 'after' : ''}`}
                onClick={handleCardClick}>
                <h4 className={` ${isClicked ? 'card-header-after' : 'card-header'}`}>
                    {props.project.name}
                </h4>
                <h5 className={`card-desc ${isClicked ? 'display' : ''}`}>
                    {props.project.desc}
                </h5>
                <ul className={`${isClicked ? "hidden" : 'display'}`}>
                    <li>{props.project.skill}</li>
                </ul>

            </div >
            <div className={`small-card ${isClicked ? 'display' : ''}`}>

                <div
                    className='small-footer'>
                    <ul>
                        <li><a href={props.project.links.git}>Git</a></li>
                        {props.project.links.projectUrl === null ? '' :
                            <li><a href={props.project.links.projectUrl}>Project</a></li>
                        }
                    </ul>

                </div>

            </div >
        </div >
    )
}

export default Card;