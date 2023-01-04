import { Link } from 'react-router-dom'
import Logo from '../../assets/LOGO.svg'

function Footer() {
    return (
        <div className='Footer'>
            <div className='Footer__block-logo'>
                <Link to="/">
                    <img className='Footer__logo' src={Logo} alt="Logo kasa" />
                </Link>
            </div>
            <p className="Footer__all-rights">© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer