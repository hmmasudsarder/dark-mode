import { useEffect, useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  function changeTheme() {
    const html = document.documentElement;
    if (mode == "light") {
      html.classList.remove("light");
      html.classList.add("dark");
      setMode("dark");
      localStorage.setItem("mode", "dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      setMode("light");
      localStorage.setItem("mode", "light");
    }
  }

  useEffect(() => {
    const currentMode = localStorage.getItem("mode");
    document.documentElement.classList.add(currentMode);
    setMode(currentMode);
  });
  return (
    <>
      <div className="grid place-items-center">
        <h3 className="mt-10 mb-5 font-bold text-center text-7xl dark:text-white">
          Hello World
        </h3>
        <div className="p-5 w-[500px] h-[300px] bg-zinc-100 dark:bg-zinc-600">
          <p className="dark:text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
            debitis fugit saepe voluptatem, similique quas! Quas beatae sequi
            molestiae accusantium suscipit, incidunt consequuntur quis libero
            dolorum. Quasi repellendus culpa perferendis?
          </p>
        </div>
        <button
          onClick={changeTheme}
          className="px-3 py-2 mt-10 text-white bg-black dark:bg-white dark:text-black dark:font-bold rounded-md"
        >
          Mode {mode === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </>
  );
}

export default App;
