import Image from 'next/image';
function Footer() {
    return (<footer className='footer'>
        <Image src="/../public/Minerva.png"
            alt="minerva" width={120}
            height={100} />
        <div className="centralizar">
            <p>Fale conosco:</p>
            <a className="ctt" href='https://wa.me/5512982986505'><Image src="/../public/whatsapplogo.png"
                alt="wpp" width={30}
                height={30} />   (12)98298-6505</a>
            <br />
            <a className="ctt" href='https://www.instagram.com/adoteumaluno_/'><Image src="/../public/insta.png"
                alt="insta" width={30}
                height={30} />   @adoteumaluno</a>
        </div>
        <style jsx>{`
        .footer{
        margin-top: 10px;
        display: flex;
        border-top: 1px groove gray;
}
        .centralizar{
        text-align: end;
        margin-right:20px;
        flex: 1;
}
        .ctt{
        text-decoration:none;
        color: black;
}
        a:hover{
            color: blue;
        }
      `}</style>




    </footer>
    )
}

export default Footer