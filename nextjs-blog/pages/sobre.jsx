import Footer from "../components/Footer"
import MessageForm from "../components/MessageForm"
import NavBar from "../components/NavBar"
function Sobre() {
    return <>
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet" />
        </head>
        <div className="container">
            <NavBar />
            <br /><br />
            <br /><br />


        </div>
        <br />
        <Footer />


        <style jsx>{`
        *{
            background-color: #5b18de;
        }
      `}</style>


    </>
}

export default Sobre