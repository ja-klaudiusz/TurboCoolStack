import React from "react";
import "./App.css";
import { LogoImage } from "ui"

function App(): JSX.Element {
  return (
    <div className="h-screen w-full bg-app-dark-3 flex flex-col items-center justify-center">
      <header className="flex flex-row items-center justify-start text-white gap-4">
        <LogoImage />
        <h1 className="flex flex-col gap-2">
          <span className="text-2xl opacity-20">Desktop App</span>
          <div className="flex flex-col">
            <span className="Turbo">TURBO</span>
            <span className="CoolStack">CoolStack</span>

          </div>

        </h1>
      </header>
    </div>
  );
}

export default App;
