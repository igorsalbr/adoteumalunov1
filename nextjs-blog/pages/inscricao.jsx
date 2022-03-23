import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import { signInWithRedirect, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from './../services/firebase'
import { useAppContext } from "../global/AppContext"


function inscricao() {

    const { user, setUser } = useAppContext();
    if (!user) {
        signInWithRedirect(auth, provider);
    }
    onAuthStateChanged(auth, (loggedUser) => {
        if (loggedUser) {
            setUser(loggedUser);
        } else { setUser('') }
    })


    return <>

        <header className="container">
            <NavBar />
            <br /><br />
            <br /><br />


        </header>
        <br />
        <Footer />


        <style jsx>{`
        
        
      `}</style>


    </>
}

export default inscricao