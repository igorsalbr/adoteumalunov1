import Head from 'next/head'
import SideNav from '../components/sideNav';
import Topbar from '../components/topBar';
var ano = 2021;
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sobre nos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topbar />    
      <body>
          
      <SideNav/>    

        <div className= 'sobre'>
          <p className= 'title'>Sobre nós </p>

          <h2>Sobre o adote:</h2>

          </div>
    </body><footer>
        <p>adc info</p>
      </footer>

      <style jsx>{`
        p {
          color: black;
          margin: 10px 150px;

        }
      

        .sobre {
          padding: 60px 0px 6px 5px;
          text-decoration: none;
          font-size: 25px;
          color: #818181;
 
        }
        h2{
          margin: 10px 160px;

        }
        footer{
          margin: 10px 160px;

        }
  

    
      `}</style><style jsx global>{`
        html,
        body {
          
         
        }

        * {
        font-family =  Oxygen;
        }
      `}</style>
      </div>
  )
}
