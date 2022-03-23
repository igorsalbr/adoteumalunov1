function Footer() {
    return (<footer className='footer'>
        <img className="mierva" src="Minerva.png"
            alt="minerva" width={150}
            height={130} />
        <div className="ctt">
            <p>Fale conosco:</p>
            <a className="ctt1" href='https://wa.me/5512982986505'><img className="cttimg" src="whatsapplogo.png"
                alt="wpp" width={30}
                height={30} />   (12)98298-6505</a>
            <br />
            <a className="ctt2" href='https://www.instagram.com/adoteumaluno_/'><img className="cttimg"  src="insta.png"
                alt="insta" width={30}
                height={30} />   @adoteumaluno_</a>
        </div>
        <style jsx>{`
        .footer{
        margin-top: 10px;
        display: grid;
        grid-template-areas: "minerva . . . . ctt"  ;
        border-top: 1px groove gray;
}
        .minerva {
            grid-area:minerva;
            justify-self:center;
        }
        .ctt{
        text-decoration:none;
        color: black;
        grid-area: ctt;
        justify-self:center;
        align-self:center;
}
.cttimg{
    margin: 5px 5px;
}
        a{
            text-decoration:none;
        }
        a:hover{
            color: blue;
        }
        p{
            grid-area:fale;
            justify-self:end;

        }
      `}</style>




    </footer>
    )
}

export default Footer