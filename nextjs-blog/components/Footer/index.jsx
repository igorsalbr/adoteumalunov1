import Image from 'next/image';
function Footer() {
    return (<footer className='footer'>
        <Image src="/../public/Minerva.png"
            alt="minerva" width={100}
            height={100} />
        <div className="centralizar">
            <a className="wpp" href='https://wa.me/5512982986505'><Image src="/../public/whatsapplogo.png"
                alt="wpp" width={30}
                height={30} />(12)98298-6505</a>
            <br />
            <a className="insta" href='https://www.instagram.com/adoteumaluno_/'><Image src="/../public/insta.png"
                alt="insta" width={30}
                height={30} />@adoteumaluno</a>
        </div>
        <style jsx>{`
        .footer{
        width: 100%;
        border-top: 1px groove;
        display: flex;
}
        .centralizar{
        margin-left: 40%;
        margin-top: 20px
        display: inline-block;
}
      `}</style>




    </footer>
    )
}

export default Footer