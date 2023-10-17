import {useState} from 'react'
import Projeto from '../projeto/Projeto'
import "./Main.css";

type ProjetoType={
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}
export default function Main(){
    const [texto,setTexto]=useState("")
    const projetos:ProjetoType[] = [
        {
            id:1,
            titulo:'Ritmos da vida',
            descricao:"É um Projeto no qual eu participo no IFMaker juntamente com outros estudantes e o professor Márcio, onde comentamos sobre a vida e suas adversidades",
            imagem:'/ritmosdavida.jpg'  
        },
        {
            id:2,
            titulo:'PCMaker',
            descricao:'Site criado para mostrar os melhores custo-benefícios de peças para computadores gamers',
            imagem:'/pcmaker.png'
        },
        {
            id:3,
            titulo:'Visita Técnica ao parque estadual várzeas do rio ivinhema',
            descricao:'Chegamos lá umas 10:00 e conhecemos o lugar, fizemos trilhas, plantamos árvores, conhecemos sobre o parque e os animais que lá habitam.',
            imagem:'/rio.jpg'
        },
        {
            id:4,
            titulo:'Site da Barbie',
            descricao:"Site que fizemos em aula e mostra os filmes com pesquisa.",
            imagem:'/barbie.jpg'
        },
        {
            id:5,
            titulo:'Visita Técnica à Foz do Iguaçu',
            descricao:'Viajamos por 7 horas, ficamos em um hotel, conhecemos a Itaipu(que foi o principal), as Cataratas, o templo budista e o shopping, mas a viagem foi incrível.',
            imagem:'/foz.jpg'
        },
    ]
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        setTexto(e.target.value)
    }
    return(
        <>
        <div className="campo_pesquisa">
            <p>Busque:</p>
            <input type="text" 
            className='botao_pesquisa'
            placeholder='Pesquise um Projeto'
            onChange={TrataTexto}/>
            
        </div>
        <div>
        {texto && <p className='resultados'>Resultados para: {texto}</p>}
        </div>
        <main className="content-main">
            {
                projetos.filter((projeto)=>projeto.titulo.toLowerCase().includes(texto)).map(
                    (projeto)=>
                    <Projeto
                    key={projeto.id}
                    descricao={projeto.descricao}
                    titulo={projeto.titulo}
                    imagem={projeto.imagem}
                    />
                )
            }
        </main>
        </>
    )
}



