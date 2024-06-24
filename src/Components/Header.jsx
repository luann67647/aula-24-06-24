import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png" alt="" />
      <strong>Curriculo Eletrônico</strong>
   </header>
  )
}
