 
import style from './sidebar.module.css';

export default function Sidebar() {
    return (
    <aside className={style.sidebar}>
      <img className={style.cover} src="https://revista-cdn.querobolsa.com.br/post_images/22274/0014b8781428d78f870865756cfd7424650f942a.png?1566236168" alt="" />
      <div className={style.profile}>
      <img className={style.avatar} src="https://static.vecteezy.com/ti/vetor-gratis/p1/5275458-medico-consultor-medico-trabalhador-icone-gratis-vetor.jpg" alt="" />
      <strong>Luann Santos</strong>
      <span>Médico</span>
      </div>
      <footer>
        <a href="">Seu GitHub</a>
      </footer>
    </aside>
    )
  }
