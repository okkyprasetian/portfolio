import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BiMenu } from 'react-icons/bi'
import { IoClose } from 'react-icons/io5'

const Navbar = ({ burger, setBurger }) => {

    const handleClick = () => {
        setBurger(!burger)
    }

    return (
        <nav className="nav" style={{ backgroundColor: `${burger ? '#111113' : '#111113'}` }}>
            <h2 className="logo">Eiyuulia</h2>
            <div className="nav-right">
                <div className={`menu ${burger && 'menu-on'}`}>
                    <a href="#portfolio" onClick={handleClick}>Portfolio</a>
                    <a href="#about" onClick={handleClick}>About</a>
                    <a href="#contact" onClick={handleClick}>Contact</a>
                </div>
                <div className="socmed">
                    <a href="https://github.com/okkyprasetian" target="_blank" rel="noreferrer"><FaGithub /></a>
                    <a href="/"><FaLinkedinIn /></a>
                </div>
                <div className="burger" onClick={handleClick}>
                    {!burger ? <BiMenu /> : <IoClose />}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;