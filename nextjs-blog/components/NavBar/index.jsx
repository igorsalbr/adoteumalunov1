import { useAppContext } from "./../../global/AppContext"
import Link from 'next/link'
function NavBar() {
    const { user } = useAppContext();
    console.log(user);
    return (
        <header>

            <div className='container'>
                <a href="/" className='foto'>
                    <img src="adoteimg.png" className="livro" alt='adote' width={250} height={250}/>
                </a>
                <div className="nowrap">Tire suas dúvidas!<Link href='/questoes'><p className='item item1'>Questões</p></Link></div>
                <div className="nowrap">Conheça o Adote<Link href='/sobre'><p className='item item2'>Sobre nós</p></Link></div>
                {user ? <div className="nowrap">Veja suas dúvidas salvas<Link  href='/plataforma' ><p className='item item3'>Area do Aluno</p></Link></div> :
                    <div className="nowrap">Faça Login para salvar duvidas<Link  href='/inscricao' ><p className='item item3'>Entrar</p></Link></div>}
            </div>
            <style jsx>{`
        .container{
            display:grid;
            grid-template-columns: 1fr 1fr 1fr;
            justify-items: center;
             
        }
        .foto{
            grid-column: 1/-1;
            justify-self:center;


    }
        .livro {
            margin: 10px 0px;
            border: solid black 1px;
            border-radius:9999px;
            
    }
        .item{
            padding: 3px;
            margin:5px;
            border: groove 1px;
            border-radius: 5px;
            text-align:center;
            font-size: large;
            white-space:nowrap;

        }
        .item:hover{
            background-color:gold;
            color:white;
            cursor:pointer;

        }
        .item1{
            grid-column-start:1;

            

        }
        .item2{
            grid-column-start:2;

}
        .item3{
            grid-column-start:3;

}
@media screen and (max-width: 500px) {
        .nowrap{
            white-space:nowrap;
            font-size:small;

}
        .item{
            font-size:normal;
        }
        
      `}</style>

        </ header >
    )
}

export default NavBar;