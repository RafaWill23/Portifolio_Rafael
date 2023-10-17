import './Header.css'
import Link from './../link/Link'
import imagem from './../images/logo.png'
function Header(){
    return(
        <header>
             <div className="imagem"><img src={imagem} alt="" /></div>
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
