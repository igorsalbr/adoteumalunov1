import { useAppContext } from "./../../global/AppContext"
function NavBar() {
    const { user, setUser } = useAppContext();
    console.log(user);
    return (
        <header>
            <img src="adoteimg.png" className='bola' alt='adote' width={150} height={150} />
            <hr className='prim' />
            <div className='a1p'>
                <a className='a1' href='/'>&bull; Home</a>
                <a className='a1' href='/sobre'>&bull; Sobre nós</a>
                {user ? <a className='a1' href='/sobre' >&bull; Area do Aluno</a> :
                    <a className='a1' href='/inscricao' >&bull; Entrar</a>}
            </div>
            <style jsx>{`      
            header {
                
                width: 100%;
                height: auto;
                text-align: center;
}
            .bola{
                position: relative;
                border-radius: 50%;
                z-index: 2;
}
            .prim{
                position: relative;
                bottom: 90px;
                z-index: 1;
                
}
            .a1p{
                display:flex;
            }
            .a1{
                margin: 10%;
                text-decoration:none;
                color: black;
                flex: 1;
                margin-top:0;
}
            a:hover{
                color:blue;
}
                `}</style>
        </ header >
    )
}

export default NavBar;