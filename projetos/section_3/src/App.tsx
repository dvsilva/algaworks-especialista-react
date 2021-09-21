import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import useCounter from "./hooks/useCounter";
import PeopleList from "./PeopleList";
import ScrollableBox, { ScrollableRef } from "./ScrollableBox";

function App() {
  {/*
  const [names, setNames] = useState([
    'Daniel', 'Thiago', 'Alex',
    'Jão', 'Alex'
  ])
  */}

  const boxRef = useRef<ScrollableRef>(null);
  const [content, setContent] = useState<string>();
  const [postId, setPostId] = useState(1);

  {/* 
  // atende componentDidMount, componentDidUpdate e componentWillAmount
  // executa no momento que o componente é montado, gera efeitos colaterais
  useEffect(() => {
    console.log('componente foi montado')
    return () => {
      console.log('componente foi desmontado')
    }
  }, [])

  // executa no momento que o componente é inicializado e atualizado
   useEffect(() => {
    console.log('componente foi montado')
    return () => {
      console.log('componente foi desmontado')
    }
  }, [names])
  */}

  const number = useCounter();

  const fetchData = useCallback(
    async function () {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const data = await response.json();
      setContent(data.body);
    },
    [postId]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // const data = Array(33_000_000).fill({ foo: "bar" });
  const data = useMemo(() => Array(33_000_000).fill({ foo: "bar" }), []);

  return (
    <div className="App">
      <header className="App-header">
        {/* 
        <ul>
          {
            names.map((name, index) => <li key={index}>{name}</li>)
          }
        </ul>
        <button
          onClick={() => {
            setNames([...names, 'jeremias'])
          }}
        >
          adicionar jeremias
        </button>
        */}

        { number }
        <br/>

        <PeopleList />
        <PeopleList />

        { postId }
        <ScrollableBox ref={boxRef} width={120} height={120}>
          <p>{content || "carregando..."}</p>
        </ScrollableBox>
        <button onClick={() => setPostId(postId + 1)}>somar</button>

      </header>
    </div>
  );
}

export default App;
