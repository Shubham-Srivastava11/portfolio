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
            skill: 'JAVASCRIPT',
            usage: 'Been using now'
        },
        {
            img: images.pythonImg,
            skill: 'PYTHON',
            usage: 'Been using now'
        },
        {
            img: images.htmlImg,
            skill: 'HTML5',
            usage: 'Been using now'
        },
        {
            img: images.cssImg,
            skill: 'CSS',
            usage: 'Been using now'
        },
        {
            img: images.mysqlImg,
            skill: 'MYSQL',
            usage: 'Been using now'
        },
        {
            img: images.javaImg,
            skill: 'JAVA',
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
                        <p className='skillHead'>{data.skill}</p>
                        <p>{data.usage}</p>
                    </div></li>
                )}

            </ul>

        </div>
    )
}

export default SkillSet;