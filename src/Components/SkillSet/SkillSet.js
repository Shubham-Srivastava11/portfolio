import './SkillSet.css';
import images from '../../images';
import skillDetails from '../utils/SkillDetails';

const SkillSet = () => {
    return (
        <div className='skillset' id='skills'>
            <div className='hrLine' ></div>
            <h1> Have put my hands on certain technologies....</h1>
            <ul>
                {skillDetails.map(data =>
                    <li><div
                        className='skillImage'
                        style={{
                            backgroundImage: `url(${data.img})`
                            // , margin: `${Math.random(2, 4)}vw` 
                        }}
                    >
                        <p className='skillHead'>{data.skill}</p>
                        <p className='skillDesc'>{data.desc}</p>
                        <p className='skillFoot'>Last Used : {data.usage}</p>
                    </div></li>
                )}

            </ul>

        </div>
    )
}

export default SkillSet;