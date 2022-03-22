import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import { useAppContext } from "../global/AppContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../services/firebase';

function Sobre() {
    const { user, setUser } = useAppContext();
    onAuthStateChanged(auth, (loggedUser) => {
        if (loggedUser) {
            setUser(loggedUser);
        } else { setUser('') }
    })
    return <>
        <header>
            <NavBar/>
        </header>
        <div className="all">
            <body className="center">
                <h2 className="titulo">O que fazemos?</h2>
                <p className="parag">Fazemos tal</p>
                <h2 className="titulo">Quem somos?</h2>
                <p className="parag">Somos tal</p>
                <h2 className="titulo">Já é universitário? Venha ser monitor!!</h2>
                <p className="parag">Link do forms</p>
            </body>
            </div>

            <br />
            <Footer />
        


        <style jsx>{`
        .all {
            display:grid;
            grid-template-columns: 1fr 1fr 1fr
        }
        .center{
            grid-column: 1/-1;
            text-align:center;
        }
        .titulo{
            padding: 5px;

        }
        .parag{
            text-align: justify;
            margin-left: 20px;
        }
        
      `}</style>


    </>
}

export default Sobre