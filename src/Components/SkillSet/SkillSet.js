import './SkillSet.css';
import images from '../../images';

const SkillSet = () => {
    const skillImages = [
        {
            img: images.reactImg,
            skill: 'REACT',
            usage: 'Been using now'
        },
        {
            img: images.jsImg,
            skill: 'REACT',
            usage: 'Been using now'
        },
        {
            img: images.pythonImg,
            skill: 'REACT',
            usage: 'Been using now'
        },
        {
            img: images.htmlImg,
            skill: 'REACT',
            usage: 'Been using now'
        },
        {
            img: images.cssImg,
            skill: 'REACT',
            usage: 'Been using now'
        }
    ]

    return (
        <div className='skillset'>
            <h1> Have put my hands on certain technologies....</h1>
            <ul>
                {skillImages.map(data =>
                    <li><div
                        className='skillImage'
                        style={{ backgroundImage: `url(${data.img})` }}
                    >
                        <p>{data.skill}</p>
                        <p>{data.usage}</p>
                    </div></li>
                )}

            </ul>

        </div>
    )
}

export default SkillSet;