import Head from 'next/head';
import SideNav from '../components/sideNav';
import Topbar from '../components/topBar';
import {getItem, addItem} from '../shared'
var ano = 2021;
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Adote um aluno</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topbar />
      <SideNav/>       
      <body>



        
        <div className= 'forum'>
          <p >Aqui será um blog </p>
          <fieldset className= 'viraCaixadeDialogo'>
            <legend>Dúvidas</legend>
            <p>
              <label for="text"> </label>
              <textarea name="text" id="text" cols="30" rows="30" placeholder='Mande sua dúvida!'></textarea>
            </p>
            </fieldset>
            <p>
              <input type="button" value="Submit!" id="btnSubmit" />
           </p>

          </div>
        </body>
        <footer>
        <p>adc info</p>
      </footer><style jsx>{`
        
        .viraCaixadeDialogo {
          text-align: center;
          border: 1px solid #eaeaea;
          border-radius: 10px;
        }

        .forum {
          margin: 60px 190px;
          
        }
      
      input {
          width: 200px;
      }
      
      
      input.radio, input.submit {
          width: auto;
      }
      
      /* style form elements on focus */
      input:focus, textarea:focus {
          background: #ffc;
      }
      
      input.radio {
          float: left;
          margin-right: 1em;
      }
      
      textarea {
          background: white;
          width: 80%;
          height: 100px;
      }
      
      /* Hack to make sure the floated radio buttons
         sit next to the labels correctly in IE/Mac*/
      
      /* This is the style I want IE/Mac to see */
      input.radio + label {
          text-indent: 2em;
      }
      
      /* Using the commented backslash filter, I'm resetting
         the above rule for everything other than IE5/Mac \*/
      input.radio + label {
          text-indent: 0;
      }
      
      `}</style><style jsx global>{`
        html,
        body {
          display: inlist;
          
         
        }

        * {
      
        }
      `}</style>
    </div>
  )
}
 
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
 
  const res = await getItem()
  console.log(res)
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      res,
    },
  }
}

