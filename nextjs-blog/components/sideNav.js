import Link from 'next/link'
import { useRouter } from 'next/router'
import style from '../styles/sideStyle.module.css'
function SideNav(){
  const router = useRouter()
  return(
      <>
        <div className={style.grid} >
            <ul className ={style.list}>
              <Link href='/sobrenos'>
                <li className={router.asPath != "/sobrenos" ? style.outra :  style.atual}>Sobre nós {router.asPath != '/sobrenos'  ? '→' :  ''}</li>
                </Link>
              <Link href='/inscricao'>
                <li className={router.asPath != "/inscricao" ? style.outra :  style.atual}>Inscreva-se {router.asPath != '/inscricao' ? '→' :  ''}</li>
                </Link>
              <Link href ='/'>
                <li className={router.asPath != "/" ? style.outra :  style.atual}>Home {router.asPath != '/' ? '→' :  ''} </li>
                </Link>
            </ul>
        </div>
      </>
  )
}
export default SideNav