import {useEffect, useState} from "react";

function useLocalStorage(key) {
  const initialState = window.localStorage.getItem(key);
  const [state, setState] = useState(initialState);

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state, key]);

  return [state, setState];
}

export default useLocalStorage;
