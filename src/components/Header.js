function Header({ currentlySelected, setCurrentlySelected }) {
    return (
        <header>
            <h1>William Combee III</h1>
            <nav>
                <p 
                    onClick={() => setCurrentlySelected('About')}
                    className={currentlySelected === 'About' && 'active-nav'}
                >About</p>
                <p 
                    onClick={() => setCurrentlySelected('Projects')}
                    className={currentlySelected === 'Projects' && 'active-nav'}
                >Projects</p>
                <p 
                    onClick={() => setCurrentlySelected('Contact')}
                    className={currentlySelected === 'Contact' && 'active-nav'}
                >Contact</p>
                <p 
                    onClick={() => setCurrentlySelected('Resume')}
                    className={currentlySelected === 'Resume' && 'active-nav'}
                >Resume</p>
            </nav>
        </header>
    )
}

export default Header;