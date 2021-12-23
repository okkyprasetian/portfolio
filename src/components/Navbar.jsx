import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav className="nav">
            <h2 className="logo">Eiyuulia</h2>
            <div className="nav-right">
                <div className="menu">
                    <a href="#portfolio">Portfolio</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="socmed">
                    <a href="/"><FaGithub /></a>
                    <a href="/"><FaLinkedinIn /></a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;