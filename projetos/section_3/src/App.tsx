import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';
import './App.css';
import useCounter from './hooks/useCounter';
import PeopleList from './PeopleList';
import ScrollableBox, { ScrollableRef } from './ScrollableBox';

interface InitialState {
  count: number;
}

type Action = { type: 'DECREMENT' } | { type: 'INCREMENT'; payload: number };

const initialState: InitialState = {
  count: 1,
};

function reducer(state: InitialState, action: Action): InitialState {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.payload,
      };
    case 'DECREMENT':
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

function App() {
  const [names, setNames] = useState([
    'Daniel',
    'Thiago',
    'Alex',
    'Jão',
    'Alex',
  ]);

  // atende componentDidMount, componentDidUpdate e componentWillAmount
  // executa no momento que o componente é montado, gera efeitos colaterais
  useEffect(() => {
    console.log('componente foi montado');
    return () => {
      console.log('componente foi desmontado');
    };
  }, []);

  // executa no momento que o componente é inicializado e atualizado
  useEffect(() => {
    console.log('componente foi montado');
    return () => {
      console.log('componente foi desmontado');
    };
  }, [names]);

  const number = useCounter(9);

  // const counter = { current: 2 }
  const counter = useRef(2);
  const div = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(div.current);

    if (div.current) {
      div.current.style.backgroundColor = 'green';
    }
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  const boxRef = useRef<ScrollableRef>(null);
  const [content, setContent] = useState<string>();
  const [postId, setPostId] = useState(1);

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
  const data = useMemo(() => Array(33_000_000).fill({ foo: 'bar' }), []);

  return (
    <div className='App' ref={div}>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          setNames([...names, 'jeremias']);
        }}
      >
        adicionar jeremias
      </button>

      <div>{number}</div>

      <div
        style={{
          backgroundColor: 'peachpuff',
        }}
      >
        {counter.current}
      </div>

      <PeopleList />
      <PeopleList />

      <div
        style={{
          backgroundColor: 'peachpuff',
        }}
      >
        {state.count}
      </div>

      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT', payload: 2 });
        }}
      >
        acrescer
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'DECREMENT' });
        }}
      >
        diminuir
      </button>

      {postId}
      <ScrollableBox ref={boxRef} width={120} height={120}>
        <p>{content || 'carregando...'}</p>
      </ScrollableBox>
      <button onClick={() => boxRef.current?.scrollToBottom()}>descer</button>
      <button onClick={() => setPostId(postId + 1)}>somar</button>
    </div>
  );
}

export default App;
