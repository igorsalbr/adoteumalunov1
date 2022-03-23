import React from 'react';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../services/firebase';
import Button from "@material-ui/core/Button";
import { useAppContext } from "../global/AppContext";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

function HomePage() {
    const { user, setUser } = useAppContext();

    onAuthStateChanged(auth, (loggedUser) => {
        if (loggedUser) {
            setUser(loggedUser);
        } else { setUser('') }
    })
    function onClickHandler(){
        return ''
    }



    return <>
            <NavBar />
            <br /><br />
            <div className="container">
                <a href='https://linktr.ee/adoteumaluno'> Inscreva-se para a TURMA 2022</a>
                <ul className='avisos'>
                    <h3>Avisos:</h3>
                    <li>&bull; Ao se cadastrar, suas duvidas ficam salvas na área do aluno.</li>
                    <li>&bull; Datas de proximos vest?</li>
                    <li>&bull; Nosso objetivo é criar uma cultura de ajuda e soliedariedade</li>
                    <li>&bull; Sinta-se a vontade para responder as duvidas de outros alunos</li><br />
                </ul>

            <br />
        </div>
        <Footer />

        <style jsx>{`
            .container{
                display:grid;
                grid-template-columns: 1fr 1fr 1fr;

                
            }
            .avisos{
                margin-top: 10px;
                grid-column:1/-1;
                justify-self:center;
                display: list-item;
                list-style-type: none;
                list-style: none;
                border: 1px groove gray;
                border-style: inset;
                padding:10px;
                border-radius: 20px;
            }

            a {
                text-decoration:none;
                text-align:center;
                grid-column:1/-1;
                justify-self:center;
                background:gold;
                border:groove;
                padding:10px;
                margin: 5px;
                max-width:200px;
                font-size: x-large;
                
            }
            `}</style>



    </>
}

export default HomePage