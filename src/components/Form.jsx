import { useRef } from 'react'
import emailjs from 'emailjs-com'
import { FiSend } from 'react-icons/fi'

function Form() {

    const form = useRef()

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('okkyportf_emailjs', 'template_udg7nwb', form.current, 'user_HbTla61k0n7L8rmDGzpY6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
        e.target.reset()
    }

    return (
        <form className="form" ref={form} onSubmit={sendEmail}>
            <div className="form-container">
                <input type="text" className="form-input form-name" placeholder="Name" name="name" />
                <input type="email" className="form-input form-email" placeholder="Email" name="email" />
                <input type="text" className="form-input form-subject" placeholder="Subject" name="subject" />
                <textarea className="form-input form-message" placeholder="Message" name="message" />
            </div>
            <button className="form-btn" type="submit">
                Send <FiSend className='send' />
            </button>
        </form>
    );
}

export default Form;