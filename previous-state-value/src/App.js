import { useEffect, useRef, useState } from "react";

const usePrevious = (val) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = val;
  });

  return ref.current;
};

function App() {
  const [count, setCount] = useState(0);

  const prev = usePrevious(count);

  return (
    <div className="App">
      <p>Current State: {count} </p>
      <p>Previous State: {prev}</p>
      <button onClick={() => setCount(count + 1)}>Doit</button>
    </div>
  );
}

export default App;
