import { useState } from 'react';
import './App.css';
import Clock from './components/Clock';
import HelloWorld from './components/HelloWorld';
import Person from './components/Person';
import Post from './components/Post';
import Sidebar from './components/Sidebar';

function App() {
  const [post, setPost] = useState({
    title: "Título maneiro",
    content: "Lorem Ipsum dolor sit amet"
  })

  /*
  setTimeout(() => {
    setPost({
      title: "Título maneiro2222",
      content: "Lorem Ipsum dolor sit ameaaat"
    })
  }, 5000);
  */

  const names = ['Daniel', 'Thiago', 'Alex', 'Jão', 'Alex']

  return (
    <div className="App">
      <HelloWorld />
      <Clock />
      <Person />
      
      <Sidebar post={post} />
      <Post post={post} />
      <Post post={post} totalComments={12} />

      <header className="App-header">
        <ul>
          {
            names.map((name, index) => <li key={index}>{name}</li>)
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
