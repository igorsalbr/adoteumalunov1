import Footer from "../components/Footer"
import MessageForm from "../components/MessageForm"
import NavBar from "../components/NavBar"
function HomePage() {
    return <>
        <div className="container">
            <NavBar />
            <br /><br />
            <MessageForm />
        </div>
        <Footer />


        <style jsx>{`
        *{
            background-color: deepskyblue;
        }
      `}</style>


    </>
}

export default HomePage