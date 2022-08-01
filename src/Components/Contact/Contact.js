import './Contact.css';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { BsTelephoneFill } from "react-icons/bs";
import { send } from 'emailjs-com';
import emailjs from 'emailjs-com';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('service_assktwe', 'template_hcgbeua', e.target, 'DTveqbKe64ej_Z5pl')
            .then((result) => {
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className='main-contact' id='connect'>
            <div className='contact-card_column'>

                <form onSubmit={sendEmail}>
                    <h2 className='form-head' >Let's Connect.</h2>

                    <input
                        type='text'
                        className='inputFiels'
                        name='from_name'
                        placeholder='Name..'
                        required></input>

                    <input
                        type='text'
                        className='inputFiels'
                        name='from_mail'
                        placeholder='Email..'
                        required></input>

                    <input
                        type='text'
                        className='inputFiels'
                        name='contact'
                        placeholder='Contact..'></input>

                    <textarea
                        className='textDesc'
                        placeholder="Let's hear your idea..."
                        name='message'
                        rows='10'
                        required></textarea>

                    <button type='Submit' className='send'> Send </button>
                </form>
            </div >
            <div className='social'>
                <ul className='social-list'>
                    <li><a id='git' href='https://github.com/Shubham-Srivastava11'><AiFillGithub className='icon' /></a></li>
                    <li><a id='linkedIn' href='https://www.linkedin.com/in/shubham-srivastava-667860171'><AiFillLinkedin className='icon' /></a></li>
                    <li><a id='twitter' href='https://twitter.com/_srivastava_'><AiOutlineTwitter className='icon' /></a></li>

                </ul>
                <ul className='call-mail'>
                    <li><FiMail className='icon-call' /> ssrivastava2297@gmail.com</li>
                    <li><FiPhoneCall className='icon-call' /> +91 8791190399</li>
                </ul>

            </div>
            <h3 className='declaration'>Made with <h3>❤</h3> by Shubham.</h3>
        </div>


    )
}

export default Contact;