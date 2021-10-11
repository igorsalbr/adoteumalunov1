import style from '../styles/Top.module.css'
import Image from 'next/image'
import Link from 'next/link'
function Topbar(){
    return(
    <>
      <h1 className={style.title}>
<p className= {style.txt}>Adote um aluno!
<Link href='/'>
<Image src="/../public/adoteimg.png" alt='adote' className={style.img} width="50" height="50" />
</Link>
</p>
      </h1>   
</>
    )
}
export default Topbar