import Comments from './Comments';
import style from './post.module.css';


export default function Post() {
  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <img src="https://static.vecteezy.com/ti/vetor-gratis/p1/5275458-medico-consultor-medico-trabalhador-icone-gratis-vetor.jpg" alt="" />
          <div className={style.authorInfo}>
            <strong>Medico Batista</strong>
            <span>Medico</span>
          </div>
        </div>
      </header>
      <div className={style.content}>
        
       
      </div>

      <form action="">
      
      </form>
      <div>
        <Comments/>
      </div>
    </article>
  )
}