const Navbar = () => {
    return (
        <nav>
            <h2 className="logo">Okky Prasetia</h2>
            <div className="nav-right">
                <div className="menu">
                    <a href="/">Project</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                </div>
                <div className="socmed">
                    <a href="/">Git</a>
                    <a href="/">In</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;