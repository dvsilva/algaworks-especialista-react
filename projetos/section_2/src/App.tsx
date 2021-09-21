import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Clock from './components/Clock';
import Form from './components/Form';
import HelloWorld from './components/HelloWorld';
import Person from './components/Person';
import Post, { PostObject } from './components/Post';
import Sidebar from './components/Sidebar';

function App() {
  // console.log('renderizou app')

  const [post, setPost] = useState({
    title: 'Título maneiro',
    content: 'Lorem Ipsum dolor sit amet'
  })

/*
  const [post, setPost] = useState<PostObject | undefined>({
    title: 'Título maneiro',
    content: 'Lorem Ipsum dolor sit amet'
  })
*/

/*
  setTimeout(() => {
    setPost({
      title: "Título maneiro2222",
      content: "Lorem Ipsum dolor sit ameaaat"
    })
  }, 5000);
*/

/*
  if(!post){
    return <h1>Post não encontrado</h1>
  }
 */

  function handleClick (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
  }

  const names = ['Daniel', 'Thiago', 'Alex', 'Jão', 'Alex']

  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld />
        <Clock />
        <Person />

        <Sidebar post={post} />

        <Post post={post} />
        <Post post={post} totalComments={12} />

        <Card title="Card" align="right">
          <Post post={post} totalComments={12} />
        </Card>

        <Card title="Card" align="left">
          <Post post={post} totalComments={12} />
        </Card>

        {/*
        {
          !!post &&
            <Card align="left" title={"Card"}>
              <Post post={post} totalComments={12} />
            </Card>
        }

        <button onClick={() => setPost(undefined)}>
          Remover post
        </button>
        */}

        <form action="/test">
          <button
            type="submit"
            onClick={handleClick}
          >
            Clique em mim
          </button>
        </form>

        <Form />
        
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
