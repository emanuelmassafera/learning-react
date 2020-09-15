import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  useContext,
  useImperativeHandle,
  useReducer,
} from 'react';

interface User {
  name: string;
  login: string;
  avatar_url: string;
}

const App: React.FC = () => {
  const [users, setUser] = useState<[User]>();

  const inputRef = useRef<HTMLInputElement>(null);

  // async function loadData() {
  //   const response = await fetch('https://api.github.com/users/emanuelmassafera');

  //   const data = await response.json();

  //   setUser(data);
  // }

  // useEffect(() => {
  //   loadData();
  // }, [])

  // const names = useMemo(() => {
  //   users?.map(user => user.name).join(', ') || ''
  // }, [users]);

  // const greeting = useCallback(() => {
  //   alert(`Hello ${names}`);
  // }, [names]);

  inputRef.current?.focus();

  return (
    <div>
      <form action="">
        <input type="text" ref={inputRef}/>
      </form>
      
    </div>
  );
}


export default App;
