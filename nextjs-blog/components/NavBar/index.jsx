import Image from 'next/image';

function NavBar() {

    return (
        <div className='navbar'>
            <Image src="/../public/adoteimg.png"
                alt="adote" height={250} width={1980}
            />
            <div>
                <a className='redirect' href='/'>&bull; <strong>Home</strong></a>
                <a className='redirect' href='/sobre'>&bull; <strong>Sobre nós</strong></a>
                <a className='redirect' href='/inscricao'>&bull; <strong>Inscreva-se</strong> </a>
            </ div>
            <style jsx>{`
        .navbar{
        width: 100%;
        height: auto;
        text-align: center;
}
        .navbar, img{
        height: auto;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        margin: 0;
        }
        .redirect{
        margin: 10%;
}
        
      `}</style>
        </ div>
    )
}

export default NavBar;