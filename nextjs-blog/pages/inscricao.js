import Head from 'next/head'
import SideNav from '../components/sideNav';
import Topbar from '../components/topBar';
var ano = 2021;
export default function Inscreva() {
  return (
    <div className="container">
      <Head>
        <title>Adote um aluno</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topbar /> 
      <body>
        <a className="title">
         Inscreva-se para a turma de {ano+1}
        </a>

        <p className="description">
          O projeto
        </p>
        <p>
          <label for="text"> </label>
          <textarea name="text" id="nome" cols="40" rows="5" placeholder='Nome:'></textarea>
        </p>
        <p>
          <label for="text"> </label>
          <textarea name="text" id="email" cols="40" rows="5" placeholder='email:'></textarea>
        </p>
        <p>
          <label for="text"> </label>
          <textarea name="text" id="numero" cols="40" rows="5" placeholder='número:'></textarea>
        </p>
        <p>
            <input type="button" value="Submit!" id="btnSubmit" />
        </p>

        <SideNav/>    

      </body>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          
        }

        body {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

     

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }


        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }


      `}</style>

      <style jsx global>{`
            
            body {
              display: inlist;
            }
    
            * {
              box-sizing: border-box;
            }
      `}</style>
    </div>
  )
}
