import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import { useAppContext } from "../global/AppContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../services/firebase';

function plataforma() {
    const { user, setUser } = useAppContext();
    onAuthStateChanged(auth, (loggedUser) => {
        if (loggedUser) {
            setUser(loggedUser);
        } else { setUser('') }
    })
    return <>
        <div className="all">
            <header>
                <NavBar/>
            </header>
            <body>
                <h2 className="font-bold text-2xl">Quem Somos</h2>
            </body>

            <br />
            <Footer />
        </div>


        <style jsx>{`
        
        
      `}</style>


    </>
}

export default plataforma