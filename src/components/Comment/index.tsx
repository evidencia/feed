import styles from './styles.module.css';
import ProfileImg from '../../assets/foto.jpg';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';
import { useState } from 'react';

interface Commentprops {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: Commentprops) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  // função para dar link no comentarios
  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={ProfileImg} />

      <div className ={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Evidência David</strong>
              <time title='11 de março às 80:13h' dateTime="2023-03-19 13:00:00">Cerca de 1h atrás</time>
            </div>

            <button
              onClick={handleDeleteComment}
              title='Deletar comentário'
            >
              <Trash  size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
