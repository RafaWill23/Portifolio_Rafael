import './Header.css'
import LinkNav from './../linknav/LinkNav'
import imagem from './../images/logo.png'
function Header(){
    return(
        <header>
             <div><img src={imagem} alt="" /></div>
            <nav>
                <ul>
                    <li>
                        <LinkNav url='/home' texto='Home'/>
                    </li>
                    <li>
                        <LinkNav url='/home' texto='Sobre'/>
                    </li>
                    <li>
                        <LinkNav url="/contato" texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
