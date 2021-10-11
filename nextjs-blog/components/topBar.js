import style from '../styles/Top.module.css'
function Topbar(){
    return(
    <>
      <h1 className={style.title}>
<p className= {style.txt}>Adote um aluno!<img src="../public/adoteimg.png" alt='adote' className="img" width="200" height="200"></img>
</p>
      </h1>   
</>
    )
}
export default Topbar