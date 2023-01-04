import Logo from '../../assets/LOGO.svg'

function Header() {
    return (
        <div className='Header'>
            <div className='Header__block-logo'>
                <img className='Header__logo' src={Logo} alt="Logo kasa" />
            </div>
            <nav className='Header__nav'>
                <ul>
                    <li><a href="">ACCUEIL</a></li>
                    <li><a href="">A PROPOS</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header