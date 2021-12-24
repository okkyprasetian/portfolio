import { FiSend } from 'react-icons/fi'

function Form() {
    return (
        <form className="form">
            <div className="form-container">
                <input type="text" className="form-input form-name" placeholder="Name" name="name" />
                <input type="text" className="form-input form-email" placeholder="Email" name="email" />
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