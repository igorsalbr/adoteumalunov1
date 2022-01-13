import Image from 'next/image';
function NavBar() {

    return (
        <header>
            <img src="adoteimg.png" className='bola' alt='adote' width={150} height={150} />
            <hr className='prim' />
            <div>
                <a className='a1' href='/'>&bull; Home</a>
                <a className='a1' href='/sobre'>&bull; Sobre nós</a>
                <a className='a1' href='/inscricao'>&bull; Entrar</a>
            </div>
            <style jsx>{`      
            header {
                width: 100%;
                height: auto;
                text-align: center;
}
            .bola{
                border-radius: 50%;
}
            .prim{
                position: relative;
                bottom: 90px;
                z-index: -1;
                
}
            .a1{
                margin: 10%;
                text-decoration:none;
                color: black;
}
            a:hover{
                color:blue;
}
                `}</style>
        </ header>
    )
}

export default NavBar;