import Footer from "../components/Footer"
import MessageForm from "../components/MessageForm"
import NavBar from "../components/NavBar"
function HomePage() {
    return <>
        <div className="container">
            <NavBar />
            <br /><br />
            <MessageForm />
            <br /><br />


        </div>
        <Footer />


        <style jsx>{`
        *{
            background-color: #5b18de;
        }
      `}</style>


    </>
}

export default HomePage