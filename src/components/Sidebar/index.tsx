import { PencilLine } from 'phosphor-react';
import capaImg from '../../assets/capa.jpeg';
import ProfileImg from '../../assets/foto.jpg';
import styles from './styles.module.css';
import { Avatar } from '../Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={capaImg} />

      <div className={styles.profile}>
        <Avatar src={ProfileImg}/>
        <strong>Evidência David</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
