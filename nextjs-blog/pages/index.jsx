import React from 'react';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../services/firebase';
import Button from "@material-ui/core/Button";
import { useAppContext } from "../global/AppContext";
function HomePage() {
    const [textField, setTextField] = useState('');
    const [fileField, setFileField] = useState('');
    const [checkboxField, setCheckboxField] = useState('');
    const { user, setUser } = useAppContext();


    const inputsHandler = (e) => {
        if (e.target.name == 'text') {
            setTextField(e.target.value)
        }
        if (e.target.name == 'file') {
            setFileField(e.target.value)
        }
        if (e.target.name == 'checkbox') {
            setCheckboxField(e.target.value)
        }
    }

    const submitButton = () => {
        const response = {
            text: textField,
            file: fileField,
            checkbox: checkboxField,
        }
        alert(user)
    }
    onAuthStateChanged(auth, (loggedUser) => {
        if (loggedUser) {
            setUser(loggedUser);
        } else { setUser('') }
    })



    return <>
        <NavBar />
        <br /><br />
        <div className="body">
            <br />
            <h3 className='convocacao'>Este site foi feito de alunos para alunos! Sintam-se à vontade para ajudar outras pessoas respondendo dúvidas!</h3>
            <br />
            <ul className='avisos'>
                <h3>Avisos:</h3>
                <li>&bull; Ao se cadastrar, suas duvidas ficam salvas na área do aluno.</li>
                <li>&bull; Datas de proximos vest?</li>
                <li>&bull; Selecione o tópico da duvida</li>
                <li>&bull; Explique a duvida e anexe fotos que ajudem a entender</li><br />
            </ul>
            <form className='formes'>
                <label>Explique sua dúvida</label>
                <br />
                <textarea onChange={inputsHandler} value={textField} type='text' name='text'></textarea><br />
                <input onChange={inputsHandler} value={fileField} type='file' name='file' /><br />
                <br />
                <div className='materia'>
                    <input type="checkbox" id="mat" name="checkbox" onChange={inputsHandler} value='mat' />
                    <label htmlFor="mat"> Matemática</label><br />
                    <input type="checkbox" id="fis" name="checkbox" onChange={inputsHandler} value='fis' />
                    <label htmlFor="fis"> Física</label><br />
                    <input type="checkbox" id="quim" name="checkbox" onChange={inputsHandler} value='quim' />
                    <label htmlFor="quim"> Química</label><br />
                </div>
                <br />
                <Button variant="contained" type="submit" onClick={submitButton} value="Enviar" className='btn'>Enviar</Button>
            </form>
            <br />
        </div>
        <br /><br />


        <br />
        <Footer />
        <style jsx>{`
            .body{
                text-align: center;
                
            }
            .convocacao{
                border-radius: 8px;
                border: outset;
                background-color: rgb(109, 212, 253);
                color: black;
                position: relative;
                bottom: 50px;
            }
            .avisos{
                display: list-item;
                list-style-type: none;
                list-style: none;
                border: 1px groove gray;
                border-style: inset;
                padding:0px;
                border-radius: 20px;
            }
            textarea{
                width: 90%;
                height: 100px;
                resize: vertical;
            }

            .formes{
                text-align: center;
                
            }
            .btn{
                min-width: 50px;
                min-height: 20px;
            }
            .materia{
                text-align:left;
                margin-left:47%;
            }
            <`}</style>



    </>
}

export default HomePage