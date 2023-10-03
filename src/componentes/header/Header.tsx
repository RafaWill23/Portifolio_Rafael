import './Header.css'
import Link from './../link/Link'
import Logo from './../../assets/images/logo.png'
function Header(){
    return(
        <header>
            <div>
                    <img src={Logo} alt="Logo"></img>
                </div>
            <nav>
                <ul>
                    <li>
                        <Link texto='Home'/>
                    </li>
                    <li>
                        <Link texto='Sobre'/>
                    </li>
                    <li>
                        <Link texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
