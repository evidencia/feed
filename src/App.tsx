import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import ProfileImg from './assets/foto.jpg';
import ProfileImg2 from './assets/img-profile.jpg';

import styles from './App.module.css';
import './styles/global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: ProfileImg2,
      name: 'Evidência David',
      role: 'Web Developer'
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],

    publishedAt: new Date(),
  },

  {
    id: 2,
    author: {
      avatarUrl: ProfileImg,
      name: 'Jonh Davi',
      role: 'Backend Developer'
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    
    publishedAt: new Date(),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author = {post.author}
                content = {post.content}
                publishedAt = {post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>


  )
}
