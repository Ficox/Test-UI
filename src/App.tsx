import { useEffect, useState } from "react";
import { getCounter, increment } from "./api";
import "./styles.css";

const UI_VERSION = "1.0.1";

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getCounter()
      .then(v => {
        setCount(v);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleClick = async () => {
    const v = await increment();
    setCount(v);
  };

  return (
    <div className="wrap">
      <div className="version-tag">v{UI_VERSION}</div>
      <div className="counter">{loading ? "…" : count}</div>
      <button onClick={handleClick}>Add one</button>
    </div>
  );
}
