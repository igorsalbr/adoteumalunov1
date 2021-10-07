import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Adote um aluno</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       <p> seguramente
         <h1 className="title">
           
           <a><Link href ='/aboutus'>Adote um aluno!</Link></a>
           
         </h1>
        </p>
      </main>

      <footer>
       
      </footer>

      <style jsx>{`
        p {
          color: blue;
        }
        .title {
          color: red;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: blue;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
