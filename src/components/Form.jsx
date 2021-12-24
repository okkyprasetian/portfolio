function Form() {
    return (
        <form className="form">
            <input type="text" className="input name" placeholder="Name" name="name" />
            <input type="text" className="input email" placeholder="Email" name="email" />
            <input type="text" className="input subject" placeholder="Subject" name="subject" />
            <input type="text" className="input message" placeholder="Message" name="message" />
        </form>
    );
}

export default Form;