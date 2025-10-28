import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(10);
  const [isNumAllowed, setIsNumAllowed] = useState(false);
  const [isSymAllowed, setIsSymAllowed] = useState(false);
  const [password, setPassword] = useState("");

  useCallback(() => { }, [length, isNumAllowed, isSymAllowed]);

  useEffect(() => {
    const passwordGenerator = () => {
      let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (isNumAllowed) {
        chars += "0123456789";
      }
      if (isSymAllowed) {
        chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
      }

      let password = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
      }
      setPassword(password);
    };
    passwordGenerator();
  }, [password]);

  return (
    <>
      <div className="w-full h-auto bg-slate-600 rounded-xl text-orange-400 flex flex-col justify-center items-center p-4 gap-4">
        <h1 className="text-5xl pb-7 underline decoration-wavy decoration-blue-500">
          Password Generator
        </h1>
        <div className="flex ">
          <input
            type="text"
            placeholder="Password"
            className="rounded-l-full w-150 p-5 bg-white text-2xl"
          />
          <button className="rounded-r-full bg-blue-500 w-25 text-2xl hover:bg-green-500 p-5 text-white">
            Copy
          </button>
        </div>
        <div>
          <input
            type="range"
            id="strLEngth"
            min={10}
            max={30}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="strLength" className="p-3 text-2xl">
            Length {length}
          </label>

          <input
            type="checkbox"
            id="Number"
            onchecked={() => setIsSymAllowed((prev) => !prev)}
            className="w-5 h-5 accent-green-500"
          />
          <label htmlFor="Number" className="p-3 text-2xl">
            Include Numbers
          </label>

          <input
            type="checkbox"
            id="Symbols"
            onchecked={() => setIsNumAllowed((prev) => !prev)}
            className="w-5 h-5 accent-green-500"
          />
          <label htmlFor="Symbols" className="p-3 text-2xl">
            Include Symbols
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
