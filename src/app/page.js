import { useEffect } from "react";

export default function Home() {
  const [coun, setCount] = useState(0);

  useEffect(() => {
    console.log("Use effect");
  }, []);
  return (
    <div
      className={{
        display: "flex",
        justifyContent: "center",
        alingitems: "center",
        height: "100vh",
      }}
    >
      <button onClick={() => {}}>+3</button>
    </div>
  );
}
