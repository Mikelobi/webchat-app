import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const [name, setname] = useState();
  const [message, setMessage] = useState("");

    const handleName = (e) => {
    setname(e.target.value);
  };
  return (
    <div className="App">
        <div>
          <div>
            <label>Name</label>
            <input onChange={handleName} />
            <div>
              <button>Sign In </button>
            </div>
          </div>
        </div>
    </div>
  );
}
