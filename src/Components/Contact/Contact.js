import './Contact.css';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import emailjs from 'emailjs-com';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
        
        emailjs.sendForm('service_assktwe', 'template_hcgbeua', e.target, 'DTveqbKe64ej_Z5pl')
            .then((result) => {
                alert('Message sent successfully!');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message. Please try again.');
            });
    }

    return (
        <section className='contact-section' id='connect'>
            <div className='contact-container'>
                <div className='contact-header'>
                    <div className='section-label'>Get In Touch</div>
                    <h2 className='contact-title'>
                        Let's Work Together
                    </h2>
                    <p className='contact-subtitle'>
                        Have a project in mind or just want to chat? 
                        I'd love to hear from you and discuss how we can bring your ideas to life.
                    </p>
                </div>
                
                <div className='contact-content'>
                    <div className='contact-info'>
                        <h3>Let's Connect</h3>
                        
                        <div className='contact-methods'>
                            <div className='contact-method'>
                                <FiMail className='contact-icon' />
                                <span className='contact-text'>ssrivastava2297@gmail.com</span>
                            </div>
                            <div className='contact-method'>
                                <FiPhoneCall className='contact-icon' />
                                <span className='contact-text'>+91 8791190399</span>
                            </div>
                        </div>
                        
                        <div className='social-links'>
                            <a 
                                href='https://github.com/Shubham-Srivastava11' 
                                className='social-link'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <AiFillGithub className='social-icon' />
                            </a>
                            <a 
                                href='https://www.linkedin.com/in/shubham-srivastava-667860171' 
                                className='social-link'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <AiFillLinkedin className='social-icon' />
                            </a>
                            <a 
                                href='https://twitter.com/_srivastava_' 
                                className='social-link'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <AiOutlineTwitter className='social-icon' />
                            </a>
                        </div>
                    </div>
                    
                    <form className='contact-form' onSubmit={sendEmail}>
                        <div className='form-group'>
                            <label className='form-label'>Name</label>
                            <input
                                type='text'
                                className='form-input'
                                name='from_name'
                                placeholder='Your name'
                                required
                            />
                        </div>
                        
                        <div className='form-group'>
                            <label className='form-label'>Email</label>
                            <input
                                type='email'
                                className='form-input'
                                name='from_mail'
                                placeholder='your.email@example.com'
                                required
                            />
                        </div>
                        
                        <div className='form-group'>
                            <label className='form-label'>Phone (Optional)</label>
                            <input
                                type='text'
                                className='form-input'
                                name='contact'
                                placeholder='Your phone number'
                            />
                        </div>
                        
                        <div className='form-group'>
                            <label className='form-label'>Message</label>
                            <textarea
                                className='form-textarea'
                                placeholder="Tell me about your project or just say hello..."
                                name='message'
                                required
                            />
                        </div>
                        
                        <button type='submit' className='submit-btn'>
                            Send Message
                        </button>
                    </form>
                </div>
                
                <div className='footer-credit'>
                    Made with <span className='footer-heart'>❤</span> by Shubham Srivastava
                </div>
            </div>
        </section>
    );
};

export default Contact;