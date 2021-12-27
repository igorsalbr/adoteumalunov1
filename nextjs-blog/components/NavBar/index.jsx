import Image from 'next/image';

function NavBar() {

    return (
        <div className='navbar'>
            <Image src="/../public/adoteimg.png"
                alt="adote" layout='fill'
            />
            <div>
                <a className='redirect'>&bull; Home</a>
                <a className='redirect'>&bull; Sobre nos</a>
                <a className='redirect'>&bull; Inscreva-se </a>
            </ div>
            <style jsx>{`
        .navbar{
        width: 100%;
}
        .navbar, img{
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        }
        .redirect{
        margin: 10%;
}
      `}</style>
        </ div>
    )
}

export default NavBar;